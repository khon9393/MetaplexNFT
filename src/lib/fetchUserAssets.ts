import { AssetV1, fetchAssetsByOwner } from "@metaplex-foundation/mpl-core";
import searchAssets from "./das/searchAssets";
import searchCollection from "./das/searchCollection";
import umiWithCurrentWalletAdapter from "./umi/umiWithCurrentWalletAdapter";
import { ConnectionContext } from "@solana/wallet-adapter-react";
import { getCurrentZodiacSign } from "@/stores/useCandiZodiacSignsStore";
import { fetchSwapSelector, SwapArgs } from "./swapselector";

const fetchUserAssets = async (SwapArgs?: SwapArgs) => {
  const umi = umiWithCurrentWalletAdapter();

  const collectionId = fetchSwapSelector(SwapArgs)?.collectionPublicKey;

  if (!collectionId) {
    throw new Error("Collection not found");
  }

  if (SwapArgs.name === 'candi') {

    return await searchAssets({
      owner: umi.identity.publicKey,
      collection: collectionId,
      burnt: false,
    });
  }
  else if (SwapArgs.name === 'zodiac') {
    return await searchCollection({
      owner: umi.identity.publicKey,
      collectionkeys: [collectionId],
      burnt: false,
    });

  };

}
export default fetchUserAssets;


