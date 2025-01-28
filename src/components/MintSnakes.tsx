import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { FC, useCallback, useMemo, useState } from 'react';
import { notify } from "../utils/notifications";
import useUserSOLBalanceStore from '../stores/useUserSOLBalanceStore';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { generateSigner, transactionBuilder, publicKey, some } from '@metaplex-foundation/umi';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { setComputeUnitLimit } from '@metaplex-foundation/mpl-toolbox';
import { clusterApiUrl } from '@solana/web3.js';
import * as bs58 from 'bs58';
import { mintV1, mplCandyMachine } from "@metaplex-foundation/mpl-core-candy-machine";
import { Fireworks } from "@fireworks-js/react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from "react-confetti";

const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
const treasury = publicKey(process.env.NEXT_PUBLIC_TREASURY);

  const candyMachineKeys = [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04),
  ];

interface MintSnakesProps {
  candyMachineId: string;
  collectionId: string;
}

export const MintSnakes: FC<MintSnakesProps> = ({ candyMachineId, collectionId }) => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  const [showFireworks, setShowFireworks] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize(); // Dynamically get window size
  
  const candyMachineAddress = publicKey(candyMachineId);
  const collectionMint = publicKey(collectionId);

  // Create an Umi instance
  const umi = useMemo(() =>
    createUmi(quicknodeEndpoint)
      .use(walletAdapterIdentity(wallet))
      .use(mplCandyMachine())
      .use(mplTokenMetadata()),
    [wallet]
  );

  const onClick = useCallback(async () => {
    if (!wallet.publicKey) {
      console.log('error', 'Wallet not connected!');
      notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
      return;
    }

    try {
      //Mint from the Candy Machine.
      const nftMint = generateSigner(umi);
      const transaction = await transactionBuilder()
        .add(setComputeUnitLimit(umi, { units: 800_000 }))
        .add(
          mintV1(umi, {
            candyMachine: candyMachineAddress,
            asset: nftMint,
            collection: collectionMint,
            mintArgs: {
              solPayment: some({ destination: treasury }),
              mintLimit: some({ id: 1 }),
            },
          })
        );
      const { signature } = await transaction.sendAndConfirm(umi, {
        confirm: { commitment: "confirmed" },
      });
      const txid = bs58.encode(signature);
      console.log('success', `Mint successful! ${txid}`)
      notify({ type: 'success', message: 'Mint successful!', txid });

      getUserSOLBalance(wallet.publicKey, connection);

      if(candyMachineKeys[0].toString() == candyMachineId)
      {
        setShowFireworks(true);
        setTimeout(() => setShowFireworks(false), 9000); // Fireworks for 9 seconds
      }
      else if(candyMachineKeys[1].toString() == candyMachineId || candyMachineKeys[2].toString() == candyMachineId) 
      {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 9000); // Confetti for 9 seconds
      }
      else
      {
        setShowFireworks(true);
        setShowConfetti(true);
        setTimeout(() => setShowFireworks(false), 9000); // Fireworks for 9 seconds
        setTimeout(() => setShowConfetti(false), 9000); // Show confetti for 9 seconds
      }


    } catch (error: any) {
      console.log('error', `Mint failed! ${error?.message}`);
    }
  }, [wallet, connection, getUserSOLBalance, umi, candyMachineAddress, collectionMint]);

  return (
    <div className="flex flex-row justify-center">
      <div className="relative group items-center">
        <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
          rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <button
          className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
          onClick={onClick}
        >
          <span>Mint NFT</span>
        </button>
      </div>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={650} // Dense confetti
          gravity={0.2} // Slow falling effect
          wind={0.02} // Slight drift
            colors={candyMachineKeys[1].toString() == candyMachineId ? ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#ffbfd9"] : ["#ffd700", "#f5f5dc", "#f0e68c", "#fcc200", "#ffdf00", "#d4af37"]}
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
    </div>
  );
};
 export default MintSnakes;