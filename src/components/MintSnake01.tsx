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
import { mintV1, fetchCandyMachine, safeFetchCandyGuard, mplCandyMachine } from "@metaplex-foundation/mpl-core-candy-machine";
const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC || clusterApiUrl('devnet');
const treasury = publicKey(process.env.NEXT_PUBLIC_TREASURY);
const candyMachineAddress = publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01);
const collectionMint = publicKey(process.env.NEXT_PUBLIC_COLLECTION_ID01);
import { Fireworks } from "@fireworks-js/react";

export const MintSnake01: FC = () => {
    const { connection } = useConnection();
    const wallet = useWallet();
    const { getUserSOLBalance } = useUserSOLBalanceStore();

    const [showFireworks, setShowFireworks] = useState(false);

    // TODO - Create an Umi instance
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

            // Fetch the Candy Machine.
            const candyMachine = await fetchCandyMachine(
                umi,
                candyMachineAddress,
            );
            
        // Fetch the Candy Guard.
        const candyGuard = await safeFetchCandyGuard(
            umi,
            candyMachine.mintAuthority,
        );
        try {
            // Mint from the Candy Machine.
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

            setShowFireworks(true);

            setTimeout(() => setShowFireworks(false), 9000); // Fireworks for 8 seconds

        } catch (error: any) {
            //notify({ type: 'error', message: `Error minting!`, description: error?.message });
            console.log('error', `Mint failed! ${error?.message}`);
        }
    }, [wallet, connection, getUserSOLBalance, umi, candyMachineAddress, treasury]);

    return (
        <div className="flex flex-row justify-center">
            <div className="relative group items-center">
                <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                    rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                    className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                    onClick={onClick}
                >
                    <span>Mint NFT #1</span>
                </button>
            </div>
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
}