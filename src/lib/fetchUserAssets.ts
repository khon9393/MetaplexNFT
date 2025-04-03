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
export default fetchUserAssets;


