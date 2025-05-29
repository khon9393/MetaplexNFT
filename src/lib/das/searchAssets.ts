import useUmiStore from "../../stores/useUmiStore";
import { publicKey } from '@metaplex-foundation/umi';
import axios from 'axios';
import { forEach } from "lodash";
<<<<<<< HEAD

=======
import {SwapArgs} from "./../swapselector";
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
/*
Shortcut Keys

Visual Studio Code (VS Code) to prettify JSON files
On Windows:    Shift + Alt + F  

curl https://solemn-skilled-bird.solana-devnet.quiknode.pro/9b1c696d40e39deec224a3d6f9cd956d58eda1dd/ \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc": "2.0", "id": 1, "method": "searchAssets", "params": {"grouping": ["collection", "47GMQmsz9a9KvNt6RSm6Umpb48915zbb16TvfBUA3Ne6"], "limit": 10}}'

*/

interface SearchAssetArgs {
  owner: string;
  collection: string;
  burnt: boolean;
}

const searchAssets = async (searchAssetArgs: SearchAssetArgs) => {
  //const umi = useUmiStore.getState().umi;

<<<<<<< HEAD
  const collectionId = process.env.NEXT_PUBLIC_COLLECTION;
=======
  const collectionId = searchAssetArgs.collection;
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451

  if (!collectionId) {
    throw new Error("Collection not found");
  }

  let page = 1;
  let continueFetch = true;
<<<<<<< HEAD
 // let ownerpk = publicKey(searchAssetArgs.owner);
=======
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
  let assets: any | undefined;

  while (continueFetch) {
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
          grouping: ['collection', collectionId],
          limit: 1000,
          burnt: searchAssetArgs.burnt,
          ownerAddress: searchAssetArgs.owner
        }
      })
    });

    const data = await response.json();
    const result = data.result;

    // Extract the json_uri from the response
    await Promise.all(result.items.map(async (item) => {
      if (item.content.files.length <= 0) {
      const jsonUri = item.content.json_uri;
      // Make a GET request to the json_uri
<<<<<<< HEAD
      const jsonResponse = await axios.get(jsonUri);
      // Extract the files array from the properties object in the response
      const filesData = jsonResponse.data.properties?.files;
      if (Array.isArray(filesData)) {
        // Insert the new data into the files array
        item.content.files = [...(item.content.files || []), ...filesData];
        // if (!item.content.metadata.description) {
        //   item.content.metadata.description = jsonResponse.data?.description;
        // }
=======
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
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
      }
      }
    }));

    console.log(`Page: ${page}, Total assets: `, result.total);
    if (result.total < 1000) {
      console.log("Total assets less than 1000 on current page, stopping loop");
      continueFetch = false;
    }
    else {
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1500)); // Pause for 2.5 seconds
=======
      await new Promise(resolve => setTimeout(resolve, 1000)); // Pause for 2.5 seconds
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
    }

    if (!assets) {
      assets = result;
      continueFetch = false;
    } else {
      result.total = result.total + assets.total;
      result.items = assets.items.concat(result.items);
    }

    page++;

  }
  return assets;
};

export default searchAssets;