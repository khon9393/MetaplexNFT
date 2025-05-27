import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { notify } from "../../utils/notifications";
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { generateSigner, transactionBuilder, publicKey, some, TransactionBuilderSendAndConfirmOptions, amountToNumber, createSignerFromKeypair, signerIdentity } from '@metaplex-foundation/umi';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { findAssociatedTokenPda, setComputeUnitLimit } from '@metaplex-foundation/mpl-toolbox';
import * as bs58 from 'bs58';
import { fetchCandyMachine, mintV1, mplCandyMachine, safeFetchCandyGuard } from "@metaplex-foundation/mpl-core-candy-machine";
import { Fireworks } from "@fireworks-js/react";
import useViewportSize from "./useViewportSize";
import Confetti from "react-confetti";
import { getCandyMachinesBalance } from '../../lib/candymachine/fetchCandyMachines';
import { Spinner } from '../ui/spinner';
import fetchCandyGuardUserMintlimit from "../../lib/candymachine/fetchCandyGuard"
import { toast } from "../../hooks/use-toast";
import { formatTokenAmount } from '@/lib/utils';
import fetchTokenBalance from "../../lib/fetchTokenBalance";
import CandibarModal from "../../components/candibar/CandibarModal";
import { fetchPromoGiveaway, savePromoGiveaway, fetchPromoGiveawayByMachine } from '@/stores/usePromoGiveAwayDB';



const options: TransactionBuilderSendAndConfirmOptions = {
  send: { skipPreflight: true },
  confirm: { commitment: "confirmed" }
};

const ComputeUnitLimit = Number(process.env.NEXT_PUBLIC_setComputeUnitLimit) || 800_000;
const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
const treasury = publicKey(process.env.NEXT_PUBLIC_TREASURY);
const tokenMint = publicKey(process.env.NEXT_PUBLIC_TOKEN);
const systemenv = process.env.NEXT_PUBLIC_RPC_ENV;

const candyMachineKeysforConfetti = [
  publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),
  publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02),
  publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03),
  publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04),
];

interface CandiMintersProps {
  candyMachineaddress: string;
  collectionaddress: string;
  buttonText?: string;
  PromoGiveaway?: boolean;
  mintdescription?: string;
  onMintSuccess?: () => void; // <-- add this line
}

export const CandiMinter: FC<CandiMintersProps> = ({ candyMachineaddress, collectionaddress, buttonText, PromoGiveaway, mintdescription, onMintSuccess }) => {
  const wallet = useWallet();
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  const [showFireworks, setShowFireworks] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const { width, height } = useViewportSize(); // Dynamically get window size
  const [isTransacting, setIsTransacting] = useState(false);

  const [isCandibarModalOpen, setIsCandibarModalOpen] = useState(false);
  const [CandibarModalTitle, setCandibarModalTitle] = useState<string>('');
  const [CandibarModalMsgTxt, setCandibarModalMsgTxt] = useState<string>('');
  const [mintSuccess, setMintSuccess] = useState(false);

  // Create an Umi instance
  const umi = useMemo(() =>
    createUmi(quicknodeEndpoint)
      .use(walletAdapterIdentity(wallet))
      .use(mplCandyMachine())
      .use(mplTokenMetadata()),
    [wallet]
  );

  const onClick = useCallback(async () => {
    setIsTransacting(true);

    if (!wallet.publicKey) {
      console.log('error', 'Wallet not connected!');
      notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
      setIsTransacting(false);
      return;
    }

    try {
      // Mint from the Candy Machine give away
      let useWalletPk: boolean = false; 
      let walletprivatekey = '';
      // Check if any records exist for the Candy Machine.
      const [promoGiveawayByMachine] = await Promise.all([
        fetchPromoGiveawayByMachine(candyMachineaddress),
      ]);

      if (promoGiveawayByMachine.length > 0
        && promoGiveawayByMachine[0].candymachineid == candyMachineaddress
      ) {
          useWalletPk = true; // If records exist, use the wallet from the file.;
          walletprivatekey = promoGiveawayByMachine[0].walletkeyprivate; // Get the private key from the first record.
      }
     
      const walletPublicKey = wallet.publicKey.toString();
      if (useWalletPk) {
        const keypair = umi.eddsa.createKeypairFromSecretKey(Uint8Array.from(bs58.decode(walletprivatekey)));
        const myKeypairSigner = createSignerFromKeypair(umi, keypair);
        // Load the keypair into umi.
        umi.use(signerIdentity(myKeypairSigner));

        const [promoGiveawaywalletdata] = await Promise.all([
          fetchPromoGiveaway(walletPublicKey, collectionaddress),
        ]);
        
        if (promoGiveawaywalletdata.length > 0) {
          setIsCandibarModalOpen(true);
          setCandibarModalTitle("Promo Giveaway Already Claimed");
          setCandibarModalMsgTxt("You have already claimed the promo giveaway for this wallet.");
          setIsTransacting(false);
          return;
        }
      }


      setIsCandibarModalOpen(false); // Close the modal if it was open
      const candyMachineKeys = [publicKey(candyMachineaddress)];
      const results = await getCandyMachinesBalance(candyMachineKeys);
      const AmountAlreadyMinted = await fetchCandyGuardUserMintlimit(umi.identity.publicKey.toString()
        , candyMachineaddress
        , results[0].candyGuardpk
        , results[0].candyGuardId)

      let userTokenbalance;
      try {
        userTokenbalance = await fetchTokenBalance(tokenMint, wallet.publicKey.toString());
        userTokenbalance = formatTokenAmount(userTokenbalance.amount, 8)
      } catch (error) {
        userTokenbalance = 0;
      }

      const usersolbalance = await getUserSOLBalance(wallet.publicKey);

      if (results[0].redeemedAmountMaxLimit > 0 && results[0].itemsRedeemed >= results[0].redeemedAmountMaxLimit) {

        setIsCandibarModalOpen(true);
        setCandibarModalTitle("Maximum Mint Limit Reached");
        setCandibarModalMsgTxt(`The maximum mint limit of: ${results[0].redeemedAmountMaxLimit} has been reached for this collection.`);
        setIsTransacting(false);
        return;
      }

      //must be greater than and not equal to.
      //must be greater than to cover transaction fees.
      if (Number(usersolbalance) <= results[0].SolCost) {

        setIsCandibarModalOpen(true);
        setCandibarModalTitle("Not enough solana SOL amount.");
        setCandibarModalMsgTxt(`NFT requires: ${results[0].SolCost} SOL`);
        setIsTransacting(false);
        return;
      }

      if (results[0].tokenPaymentAmount > 0 && (userTokenbalance < results[0].tokenPaymentAmount)) {

        setIsCandibarModalOpen(true);
        setCandibarModalTitle("Not Enough Candibar Tokens.");

        if (results[0].tokenPaymentAmount > 0) {
          setCandibarModalMsgTxt(`NFT requires: ${results[0].tokenPaymentAmount.toLocaleString()} Candibar Tokens`);

          setIsTransacting(false);
          return;
        }
      }

      if (results[0].tokenBurnAmount > 0 && (userTokenbalance < results[0].tokenBurnAmount)) {

        setIsCandibarModalOpen(true);
        setCandibarModalTitle("Not Enough Candibar Tokens.");

        if (results[0].tokenBurnAmount > 0) {
          setCandibarModalMsgTxt(`NFT requires: ${results[0].tokenBurnAmount.toLocaleString()} Candibar Tokens to burn`);
        }

        setIsTransacting(false);
        return;
      }


      if (results[0].candyGuardMinLimit > 0 && (Number(AmountAlreadyMinted) >= results[0].candyGuardMinLimit)) {
        setIsCandibarModalOpen(true);
        setCandibarModalTitle("Wallet Mint Limit Reached");
        setCandibarModalMsgTxt(`You have reached the maximum mint limit of ${results[0].candyGuardMinLimit} for this wallet, having already minted ${Number(AmountAlreadyMinted)} from this collection. 
          Please explore other collections to mint or trade with fellow Candibar collectors.`);
        setIsTransacting(false);
        return;
      }


       const nftMint = generateSigner(umi);
      const transaction = transactionBuilder()
        .add(setComputeUnitLimit(umi, { units: Number(ComputeUnitLimit) }))
        .add(
          mintV1(umi, {
            candyMachine: publicKey(candyMachineaddress),
            asset: nftMint,
            collection: publicKey(collectionaddress),
            mintArgs: {
              ...(results[0].SolCost > 0 ? {
                solPayment: some({ destination: treasury }),
              } : {}),

              mintLimit: some({ id: results[0].candyGuardId }),

              ...(useWalletPk ? { owner: publicKey(walletPublicKey) } : {}),

              ...(results[0].tokenPaymentAmount > 0 ? {
                tokenPayment: some({
                  mint: tokenMint,
                  destinationAta: (await findAssociatedTokenPda(umi, {
                    mint: tokenMint,
                    owner: treasury,
                  }))[0],
                }),
              } : {}),

              ...(results[0].tokenBurnAmount > 0 ? {
                tokenBurn: some({
                  mint: tokenMint,
                  amount: results[0].tokenBurnAmount,
                }),
              } : {}),
            },
          })
        );

      const { signature } = await transaction.sendAndConfirm(umi, options);

      if (useWalletPk) {
        if (!signature || !(signature instanceof Uint8Array)) {
          console.error("Failed to encode transaction ID: Invalid signature format.");
          return;
        }
        const txid = bs58.encode(signature);
        console.log("Transaction ID:", txid); // Log the transaction ID
        toast({
          title: "Transaction ID",
          description: `Transaction ID: ${txid}`,
          style: {
            backgroundColor: "white",
            color: "black",
          },
        });
      }

      toast({
        title: "Successful",
        description: "Mint successful!",
      });

        try {
          savePromoGiveaway({
            walletpk: walletPublicKey || 'YourWalletPublicKeyHere',
            assetid: nftMint.publicKey,
            collectionid: collectionaddress,
            candymachineid: candyMachineaddress,
            name: systemenv,
            description: 'Promo Giveaway NFT: ' + mintdescription,
            promo_mint: PromoGiveaway,
          });
        } catch (error) {
          // Do nothing
        }

      if (candyMachineKeysforConfetti[0].toString() == candyMachineaddress) {
        setShowFireworks(true);
        setTimeout(() => {
          setShowFireworks(false);
          setIsTransacting(false);   // <-- move here
          setMintSuccess(true);      // <-- after animation, show refresh button
          onMintSuccess();
          window.location.reload();
        }, 9000);
      }
      else if (candyMachineKeysforConfetti[3].toString() == candyMachineaddress) {
        setShowFireworks(true);
        setShowConfetti(true);
        setTimeout(() => {
          setShowFireworks(false);
          setShowConfetti(false);
          setIsTransacting(false);   // <-- move here
          setMintSuccess(true);      // <-- after animation, show refresh button
          onMintSuccess();
          window.location.reload();
        }, 9000);
      }
      else {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          setIsTransacting(false);   // <-- move here
          setMintSuccess(true);      // <-- after animation, show refresh button
          onMintSuccess();
          window.location.reload();
        }, 9000);
      }

    } catch (error: any) {

      setIsTransacting(false);


      const errorMessage = error.message.includes("Not enough tokens on the account")
        ? "not have enough tokens to complete the mint."
        : error.message;

      toast({
        title: "Mint failed!",
        description: errorMessage,
        variant: "destructive",
        style: {
          backgroundColor: "white",
          color: "white",
          animation: "pulse 2s infinite",
          backgroundImage: "linear-gradient(to bottom right, #6366f1, #d946ef)",
        },
      });

    }
  }, [wallet, getUserSOLBalance, umi, candyMachineaddress, collectionaddress, onMintSuccess,PromoGiveaway, mintdescription]);

  return (

    <div className="flex flex-row justify-center">
      <div className="relative group items-center">
        <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
          rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

        {/* Mint Button */}
        {wallet.connected && !mintSuccess && !isTransacting && (
          <button
            className="px-8 m-2 z-50 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
            onClick={onClick}
            disabled={isTransacting}
            style={{ display: isTransacting ? "none" : "block" }}
          >
            <span>{buttonText || "Mint NFT"}</span>
          </button>
        )}

        {/* Minting in progress overlay */}
        {isTransacting && (
          <div className="fixed inset-0 z-80 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
              <p className="mt-4 text-center text-xl font-semibold text-black">Minting in progress...</p>
            </div>
          </div>
        )}
      </div>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={650} // Dense confetti
          gravity={0.2} // Slow falling effect
          wind={0.02} // Slight drift
          colors={candyMachineKeysforConfetti[3].toString() == candyMachineaddress ?
            ["#ffd700", "#f5f5dc", "#f0e68c", "#fcc200", "#ffdf00", "#d4af37"]
            :
            // ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#ffbfd9"]
            ["#ffd700", "#ff477e", "#f0e68c", "#ff85a1", "#fbb1bd", "#daa520"]
          }
        />
      )}
      {showFireworks && (
        <div className="fixed inset-0 z-50">
          <Fireworks
            options={{
              rocketsPoint: { min: 50, max: 50 }, // Centered
            }}
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          />
        </div>
      )}

      {isCandibarModalOpen && (
        <CandibarModal
          isOpen={isCandibarModalOpen}
          onClose={() => setIsCandibarModalOpen(false)}
          MessageTitle={CandibarModalTitle}
          MessageTxt={CandibarModalMsgTxt}
        />
      )}
    </div>
  );
};
export default CandiMinter;