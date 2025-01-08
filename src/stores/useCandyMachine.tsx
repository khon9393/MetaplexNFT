
import {fetchCandyMachine} from "@metaplex-foundation/mpl-core-candy-machine";

import { clusterApiUrl } from '@solana/web3.js';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';

import { PublicKey, publicKey} from '@metaplex-foundation/umi';
const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC || clusterApiUrl('devnet');

/**
 * Fetches the candy machine balance for multiple public keys.
 * @param publicKeys Array of candy machine public keys.
 * @returns An array of objects containing itemsRedeemed and itemsAvailable for each candy machine.
 */
export const getCandyMachinesBalance = async (publicKeys: PublicKey[]) => {
    const umi = createUmi(quicknodeEndpoint).use(mplTokenMetadata());
    const results = await Promise.all(
      publicKeys.map(async (key) => {
        try {
          const candyMachine = await fetchCandyMachine(umi, key);
          return {
            publicKey: key.toString(),
            itemsRedeemed: Number(candyMachine.itemsRedeemed),
            itemsAvailable: Number(candyMachine.data.itemsAvailable),
            collectionMint: String(candyMachine.collectionMint),
          };
        } catch (error) {
          console.error(`Error fetching candy machine balance for key ${key}:`, error);
          return {
            publicKey: key.toString(),
            itemsRedeemed: 0,
            itemsAvailable: 0,
            collectionMint: "",
          };
        }
      })
    );
    return results;
  };
