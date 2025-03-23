import useUmiStore from "../../stores/useUmiStore";
import { publicKey } from '@metaplex-foundation/umi';
import axios from 'axios';
import {CandiZodiacSigns} from "../../stores/useCandiZodiacSignsStore";
import { getCollection } from "@/stores/useCandibardataStorefromDB";

interface SearchAssetArgs {
  owner: string;
  burnt: boolean;
}

const searchCollection = async (searchAssetArgs: SearchAssetArgs): Promise<boolean> => {
  if (!CandiZodiacSigns || CandiZodiacSigns.length === 0) {
    throw new Error("No collections found in CandiZodiacSigns");
  }

  // Extract all collectionPublicKeys from CandiZodiacSigns
  const collectionPublicKeys = CandiZodiacSigns.map(sign => sign.collectionPublicKey).filter(Boolean);

  if (collectionPublicKeys.length === 0) {
    throw new Error("No valid collectionPublicKeys found in CandiZodiacSigns");
  }

  for (const collectionPublicKey of collectionPublicKeys) {
    let page = 1;
    let continueFetch = true;

    while (continueFetch) {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_RPC, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'searchAssets',
            params: {
              grouping: ['collection', collectionPublicKey], // Use one collectionPublicKey at a time
              limit: 1000,
              burnt: searchAssetArgs.burnt,
              ownerAddress: searchAssetArgs.owner
            }
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch assets for collection: ${collectionPublicKey}. Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.result || !data.result.items) {
          throw new Error(`Invalid response structure for collection: ${collectionPublicKey}`);
        }

        const result = data.result;

        // Fetch collection details
        const collection = await getCollection(collectionPublicKey);
        const completeCollectionNames = (await collection).images.map(image => `Zodiac ${image.name}`);
        const walletCollectionNames = result.items.map((item: any) => item.content.metadata.description);

        // Validate if walletCollectionNames contains all items in completeCollectionNames
        const isValidCollection = completeCollectionNames.every(name => walletCollectionNames.includes(name));
        if (isValidCollection) {
          console.log(`Valid collection found for: ${collectionPublicKey}`);
          return true; // Return true and exit the function
        }

        console.log(`Collection: ${collectionPublicKey}, Page: ${page}, Total assets: `, result.total);
        if (result.total < 1000) {
          console.log("Total assets less than 1000 on current page, stopping loop");
          continueFetch = false;
        } else {
          await new Promise(resolve => setTimeout(resolve, 2500)); // Pause for 2.5 seconds
        }

        page++;
      } catch (error) {
        console.error(`Error processing collection: ${collectionPublicKey}`, error);
        continueFetch = false; // Stop fetching for this collection if an error occurs
      }
    }
  }

  return false; // Return false if no valid collection is found
};

export default searchCollection;