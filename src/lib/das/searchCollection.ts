
import axios from 'axios';
import { getCompleteCollectionNames } from "../fetchCompleteCollection";
interface SearchAssetArgs {
  owner: string;
  collectionkeys: string[];
  burnt: boolean;
}

const overrideZodiacSwap = Number(process.env.NEXT_PUBLIC_OVERRIDE_ZODIAC_SWAP) || 0;

const searchCollection = async (searchAssetArgs: SearchAssetArgs) => {

   const collectionPublicKeys = searchAssetArgs.collectionkeys;
   
  if (collectionPublicKeys.length === 0) {
    throw new Error("No valid collectionPublicKeys found in SearchAssetArgs");
  }

  let allAssets: any[] = []; // Store all assets across collections

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
              grouping: ['collection', collectionPublicKey],
              limit: 1000,
              burnt: searchAssetArgs.burnt,
              ownerAddress: searchAssetArgs.owner
              
            }
          })
        });

        if (!response.ok) {
          console.warn(`Failed to fetch assets for collection: ${collectionPublicKey}. Status: ${response.status}`);
          continueFetch = false;
          await new Promise(resolve => setTimeout(resolve, 1000));
          continue;
        }

        const data = await response.json();

        if (!data || !data.result || !data.result.items) {
          throw new Error(`Invalid response structure for collection: ${collectionPublicKey}`);
        }

        const result = data.result;

        if (result.items.length === 0) {
          continueFetch = false;
          await new Promise(resolve => setTimeout(resolve, 1000));
          continue;
        }

        // Process items to fetch additional metadata
        await Promise.all(result.items.map(async (item) => {
          if (item.content.files.length <= 0) {
            const jsonUri = item.content.json_uri;
            // Make a GET request to the json_uri
            try {
              const jsonResponse = await axios.get(jsonUri);
              // Extract the files array from the properties object in the response
              const filesData = jsonResponse.data.properties?.files;
              if (Array.isArray(filesData)) {
                // Insert the new data into the files array
                item.content.files = [...(item.content.files || []), ...filesData];
                if (!item.content.metadata.description) {
                  item.content.metadata.description = jsonResponse.data?.description;
                }
              }
            } catch (error) {
              if (axios.isAxiosError(error) && error.response?.status === 404) {
                console.warn(`Item with json_uri ${jsonUri} not found, removing item.`);
                result.items = result.items.filter((i) => i !== item);
              } else {
                throw error;
              }
            }
            }

          item.content.collectionid = collectionPublicKey;

        }));

        // Fetch collection details
        const completeCollectionNames = await getCompleteCollectionNames(collectionPublicKey);

        //exract collection names from the result
        const walletCollectionNames = result.items.map((item: any) => item.content.metadata.description);

        // Validate if walletCollectionNames contains all items in completeCollectionNames
        if(Number(overrideZodiacSwap) === 0) {
        const isValidCollection = completeCollectionNames.every(name => walletCollectionNames.includes(name));
        if (!isValidCollection) {
          console.log(`Valid collection found for: ${collectionPublicKey}`);
          continueFetch = false;
          await new Promise(resolve => setTimeout(resolve, 1000));
          continue;
        }
      }

        console.log(`Collection: ${collectionPublicKey}, Page: ${page}, Total assets: `, result.total);

        // Append assets to allAssets
        allAssets = allAssets.concat(result.items);

        if (result.total < 1000) {
          console.log("Total assets less than 1000 on current page, stopping loop");
          continueFetch = false;
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        page++;

      } catch (error) {
        console.error(`Error processing collection: ${collectionPublicKey}`, error);
        continueFetch = false;
      }
    }
  }

  return allAssets.length > 0 ? { total: allAssets.length, items: allAssets } : undefined;
};

export default searchCollection;