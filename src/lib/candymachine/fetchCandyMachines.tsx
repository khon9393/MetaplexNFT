import { fetchCandyGuard, fetchCandyMachine, mplCandyMachine } from "@metaplex-foundation/mpl-core-candy-machine";
import { clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { PublicKey } from '@metaplex-foundation/umi';
import { fetchCollection } from "@metaplex-foundation/mpl-core";
import { formatTokenAmount } from "@/lib/utils";

const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC || clusterApiUrl('devnet');
const rpcRateLimit = Number(process.env.NEXT_PUBLIC_RPC_RATE_LIMIT) || 10; // RPC requests per second
const apiRateLimit = Number(process.env.NEXT_PUBLIC_API_RATE_LIMIT) || 2; // API requests per second
const ratelimitbetweencalls = 1000 / Math.min(rpcRateLimit, apiRateLimit); // Delay between calls in ms

// Centralized queue for rate-limiting
const requestQueue: (() => Promise<any>)[] = [];
let isProcessingQueue = false;

const processQueue = async () => {
  if (isProcessingQueue) return;
  isProcessingQueue = true;

  while (requestQueue.length > 0) {
    const request = requestQueue.shift();
    if (request) {
      await request();
      await new Promise((resolve) => setTimeout(resolve, ratelimitbetweencalls)); // Enforce delay
    }
  }

  isProcessingQueue = false;
};

const enqueueRequest = (request: () => Promise<any>) => {
  requestQueue.push(request);
  processQueue();
};

/**
 * Fetches the candy machine balance for multiple public keys.
 * @param publicKeys Array of candy machine public keys.
 * @returns An array of objects containing itemsRedeemed and itemsAvailable for each candy machine.
 */
export const getCandyMachinesBalance = async (publicKeys: PublicKey[]) => {
  const umi = createUmi(quicknodeEndpoint)
    .use(mplTokenMetadata())
    .use(mplCandyMachine());

  const results: any[] = [];

  for (const key of publicKeys) {
    await new Promise<void>((resolve) => {
      enqueueRequest(async () => {
        try {
          const candyMachine = await fetchCandyMachine(umi, key);
          if (!candyMachine) throw new Error("Candy machine not found");

          const collection = await fetchCollection(umi, candyMachine.collectionMint);
          const collectionName = collection ? collection.name : "";

          const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);

          const redeemedAmountMaxLimit = candyGuard?.guards.redeemedAmount.__option === "Some" 
          ? Number(candyGuard.guards.redeemedAmount.value.maximum)
           : 0;

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
            redeemedAmountMaxLimit,
            SolCost: candyGuardBasisPoints,
            candyGuardpk: candyMachine.mintAuthority,
            candyGuardId,
            candyGuardMinLimit,
            tokenPaymentAmount,
          });
        } catch (error: any) {
          console.error(`Error fetching candy machine balance for key ${key}:`, error);
          results.push({
            publicKey: key.toString(),
            itemsRedeemed: 0,
            itemsAvailable: 0,
            collectionMint: "",
            collectionName: "",
            redeemedAmountMaxLimit: 0,
            SolCost: 0,
            candyGuardpk: "",
            candyGuardId: 0,
            candyGuardMinLimit: 0,
            tokenPaymentAmount: 0,
          });
        } finally {
          resolve();
        }
      });
    });
  }

  return results;
};