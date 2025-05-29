import searchChartAssets from "./das/searchChartAssets";

const fetchUserAssets = async (collectionAddresses: string[]) => {
  const assets = await Promise.all(
    collectionAddresses.map(async (collectionaddress) => {
      const searchParams = {
        collection: collectionaddress,
        // burnt: false,
      };
      return await searchChartAssets(searchParams);
    })
  );
  return assets;
};

export default fetchUserAssets;


