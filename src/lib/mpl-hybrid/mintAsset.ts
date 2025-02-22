
"use client";

import { TradeState } from '../../components/candibar/swapWrapper/swapWrapper';
import useEscrowStore from "../../stores/useEscrowStore";
import { DasApiAsset } from "@metaplex-foundation/digital-asset-standard-api";
import { captureV1, releaseV1 } from "@metaplex-foundation/mpl-hybrid";
import fetchEscrowAssets from "../fetchEscrowAssets";
import sendAndConfirmWalletAdapter from "../umi/sendAndConfirmWithWalletAdapter";
import umiWithCurrentWalletAdapter from "../umi/umiWithCurrentWalletAdapter";
import { REROLL_PATH } from '../constants';
import { Asset } from "../../utils/index";
import {
  Signer,
  Umi,
  createNoopSigner,
  generateSigner,
  publicKey,
  signerIdentity,
  some,
} from "@metaplex-foundation/umi";
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mintV1, mplCandyMachine } from '@metaplex-foundation/mpl-core-candy-machine';
import { findAssociatedTokenPda } from '@metaplex-foundation/mpl-toolbox';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { useConnection, useWallet, WalletContextState } from '@solana/wallet-adapter-react';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { getCandyMachinesBalance } from '../candymachine/fetchCandyMachines';


export const mintAsset = async (umi:any) => {
 
  const results = await getCandyMachinesBalance([publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05)]);

  const nftMint = generateSigner(umi);

  const releaseTx = mintV1(umi, {
    candyMachine: publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05),
    asset: nftMint,
    collection: publicKey(process.env.NEXT_PUBLIC_COLLECTION_ID05),
    mintArgs: {
      solPayment: some({ destination: publicKey(process.env.NEXT_PUBLIC_TREASURY) }),
      mintLimit: some({ id: results[0].candyGuardId }),
      tokenPayment: some({
        mint: publicKey(process.env.NEXT_PUBLIC_TOKEN),
        destinationAta: (await findAssociatedTokenPda(umi, {
          mint: publicKey(process.env.NEXT_PUBLIC_TOKEN),
          owner: publicKey(process.env.NEXT_PUBLIC_TREASURY),
        }))[0],
      }),
    },
  });

  return await sendAndConfirmWalletAdapter(releaseTx);
};

export default mintAsset;