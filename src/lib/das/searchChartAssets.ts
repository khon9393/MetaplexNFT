import axios from "axios";

interface SearchAssetArgs {
  collection: string;
  burnt: boolean;
}

const rpcRateLimit = Number(process.env.NEXT_PUBLIC_RPC_RATE_LIMIT) || 10; // RPC requests per second
const ratelimitBetweenCalls = 1000 / rpcRateLimit; // Delay between calls in ms
const maxRetries = 5; // Maximum number of retries for 429 errors

// Centralized queue for rate-limiting
const requestQueue: (() => Promise<any>)[] = [];
let isProcessingQueue = false;

const processQueue = async () => {
  if (isProcessingQueue) return;
  isProcessingQueue = true;

  while (requestQueue.length > 0) {
    const request = requestQueue.shift();
    if (request) {
      await new Promise((resolve) => setTimeout(resolve, ratelimitBetweenCalls)); // Enforce delay
      await request();
    }
  }

  isProcessingQueue = false;
};

const enqueueRequest = (request: () => Promise<any>) => {
  requestQueue.push(request);
  processQueue();
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const searchAssets = async (searchAssetArgs: SearchAssetArgs) => {
  const collectionId = searchAssetArgs.collection;

  if (!collectionId) {
    throw new Error("Collection not found");
  }

  let page = 1;
  let continueFetch = true;
  let assets: any | undefined;

  while (continueFetch) {
    await new Promise<void>((resolve) => {
      enqueueRequest(async () => {
        let retries = 0;

        while (retries <= maxRetries) {
          try {
            const response = await axios.post(process.env.NEXT_PUBLIC_RPC || "", {
              jsonrpc: "2.0",
              id: 1,
              method: "searchAssets",
              params: {
                grouping: ["collection", collectionId],
                limit: 1000,
                burnt: searchAssetArgs.burnt,
              },
            });

            const data = response.data;
            const result = data.result;

            if (!assets) {
              assets = result;
              continueFetch = false;
            } else {
              assets.total += result.total;
              assets.items = assets.items.concat(result.items);
            }

            break; // Exit retry loop on success
          } catch (error: any) {
            if (axios.isAxiosError(error) && error.response?.status === 429) {
              retries++;
              if (retries > maxRetries) {
                console.error("Max retries reached. Aborting request.");
                continueFetch = false;
                break;
              }
              const backoffTime = Math.pow(2, retries) * 1000; // Exponential backoff
              console.warn(`Rate limit hit, retrying in ${backoffTime / 1000} seconds...`);
              await sleep(backoffTime);
            } else {
              console.error("Error fetching assets:", error.message || error);
              continueFetch = false; // Stop fetching on other errors
              break;
            }
          }
        }

        resolve();
      });
    });

    page++;
  }

  return assets;
};

export default searchAssets;