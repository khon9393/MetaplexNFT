import { fetchCandyGuard, fetchCandyMachine, mplCandyMachine } from "@metaplex-foundation/mpl-core-candy-machine";
import { clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { PublicKey } from '@metaplex-foundation/umi';
import { fetchCollection } from "@metaplex-foundation/mpl-core";
import { formatTokenAmount } from "@/lib/utils";
import { delay } from "@/lib/utils"; // Import the delay function

const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC || clusterApiUrl('devnet');
const ratelimitbetweencalls = Number(process.env.NEXT_PUBLIC_RATE_LIMIT_TIME_UNIT_IN_MS) || 2000;
/**
 * Fetches the candy machine balance for multiple public keys.
 * @param publicKeys Array of candy machine public keys.
 * @returns An array of objects containing itemsRedeemed and itemsAvailable for each candy machine.
 */
export const getCandyMachinesBalance = async (publicKeys: PublicKey[]) => {
  const umi = createUmi(quicknodeEndpoint)
    .use(mplTokenMetadata())
    .use(mplCandyMachine());

  const results = [];

  for (const key of publicKeys) {
    let retryCount = 0;
    const maxRetries = 3; // Retry up to 3 times in case of rate limit errors

    while (retryCount <= maxRetries) {
      try {
        const candyMachine = await fetchCandyMachine(umi, key);
        if (!candyMachine) throw new Error("Candy machine not found");

        const collection = await fetchCollection(umi, candyMachine.collectionMint);
        const collectionName = collection ? collection.name : "";

        const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);
        const candyGuardBasisPoints = candyGuard?.guards.solPayment.__option === 'Some'
          ? Number(candyGuard.guards.solPayment.value.lamports.basisPoints) / LAMPORTS_PER_SOL
          : 0;
        const { id: candyGuardId, limit: candyGuardMinLimit } = candyGuard?.guards.mintLimit.__option === 'Some'
          ? candyGuard.guards.mintLimit.value
          : { id: 0, limit: 0 };

        const tokenPaymentAmount = candyGuard?.guards.tokenPayment.__option === 'Some'
          ? Number(formatTokenAmount(candyGuard.guards.tokenPayment.value.amount, 8))
          : 0;

        results.push({
          publicKey: key.toString(),
          itemsRedeemed: Number(candyMachine.itemsRedeemed),
          itemsAvailable: Number(candyMachine.data.itemsAvailable),
          collectionMint: String(candyMachine.collectionMint),
          collectionName,
          SolCost: candyGuardBasisPoints,
          candyGuardpk: candyMachine.mintAuthority,
          candyGuardId,
          candyGuardMinLimit,
          tokenPaymentAmount,
        });

        // Break out of the retry loop if successful
        break;

      } catch (error: any) {
        if (error.message.includes("rate limit exceeded")) {
          console.warn(`Rate limit exceeded for key ${key}. Retrying in 2 seconds...`);
          retryCount++;
          await delay(Number(ratelimitbetweencalls)); // Wait for 2 seconds before retrying
        } else {
          console.error(`Error fetching candy machine balance for key ${key}:`, error);
          results.push({
            publicKey: key.toString(),
            itemsRedeemed: 0,
            itemsAvailable: 0,
            collectionMint: "",
            collectionName: "",
            SolCost: 0,
            candyGuardpk: "",
            candyGuardId: 0,
            candyGuardMinLimit: 0,
            tokenPaymentAmount: 0,
          });
          break; // Exit the retry loop for non-rate-limit errors
        }
      }
    }
  }

  return results;
};