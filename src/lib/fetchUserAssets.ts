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

export default fetchUserAssets;


