
import searchCollection from "./das/searchCollection";
import umiWithCurrentWalletAdapter from "./umi/umiWithCurrentWalletAdapter";

const searchCompleteCollectionAssets = async () => {
  const umi = umiWithCurrentWalletAdapter();

  return await searchCollection({
    owner: umi.identity.publicKey,
    burnt: false,
  });

};
export default searchCompleteCollectionAssets;

