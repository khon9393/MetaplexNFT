<<<<<<< HEAD
import { AssetV1, fetchAssetsByOwner } from "@metaplex-foundation/mpl-core";
import searchAssets from "./das/searchAssets";
import umiWithCurrentWalletAdapter from "./umi/umiWithCurrentWalletAdapter";
import { ConnectionContext } from "@solana/wallet-adapter-react";
import { getCurrentZodiacSign } from "@/stores/useCandiZodiacSignsStore";
import {fetchSwapSelector, SwapArgs} from "./swapselector";

const fetchUserAssets = async (SwapArgs?) => {
  const umi = umiWithCurrentWalletAdapter();

  //const collectionId = process.env.NEXT_PUBLIC_COLLECTION;
    const collectionId =  fetchSwapSelector(SwapArgs)?.collectionPublicKey;

  if (!collectionId) {
    throw new Error("Collection not found");
  }

  return await searchAssets({
    owner: umi.identity.publicKey,
    collection: collectionId,
    burnt: false,
  });

};
=======
import searchAssets from "./das/searchAssets";
import searchCollection from "./das/searchCollection";
import umiWithCurrentWalletAdapter from "./umi/umiWithCurrentWalletAdapter";
import { fetchSwapSelector, SwapArgs } from "./swapselector";

const fetchUserAssets = async ({ name, ...swapArgs }: SwapArgs) => {
  const umi = umiWithCurrentWalletAdapter();
  const { collectionPublicKey: collectionId, zodiacExists } = fetchSwapSelector({ name, ...swapArgs });

  if (name === 'zodiac' && !zodiacExists) return [];
  if (!collectionId) throw new Error("Collection not found");

  const searchParams = {
    owner: umi.identity.publicKey,
    collection: collectionId,
    burnt: false,
  };

  return name === 'candi'
    ? await searchAssets(searchParams)
    : await searchCollection({ ...searchParams, collectionkeys: [collectionId] });
};

>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
export default fetchUserAssets;


