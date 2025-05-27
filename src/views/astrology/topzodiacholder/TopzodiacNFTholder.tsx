import { FC, useEffect, useState } from "react";
import fetchChartData from "@/lib/fetchChartData";
import { getCurrentZodiacSignTopN, ZodiacSign } from "@/stores/useCandiZodiacSignsStore";
import { Spinner } from "../../../components/ui/spinner";

export const TopzodiacNFTholder: FC = () => {
  const [zodiacSigns, setZodiacSigns] = useState<ZodiacSign[]>([]);
  const [zodiacDetails, setZodiacDetails] = useState<Record<string, any>>({});
  const [sortedZodiacSigns, setSortedZodiacSigns] = useState<ZodiacSign[]>([]);
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  useEffect(() => {
    const currentSigns = getCurrentZodiacSignTopN(12); // Fetch all zodiac signs
    if (currentSigns) {
      setZodiacSigns(currentSigns);
    }
  }, []);

  const fetchAssets = async () => {
    setIsLoading(true); // Start loading
    try {
      const currentSignKeys = zodiacSigns.map((sign: ZodiacSign) => sign.collectionPublicKey);
      const detailsArray = await Promise.all(
        currentSignKeys.map(async (key) => {
          const data = await fetchChartData([key]);
          // Remove data for the specified owner
          if (data && data[0]?.items) {
            data[0].items = data[0].items.filter(
              (item: any) =>
              item.ownership?.owner !== "9edke98gDD1MYwjc9pgnhDu9bmXngip82YWKwHMHboai" &&
              item.ownership?.owner !== "BbnxkwNm2tfMZig2uCq19shxXFujm7zWZhbFD4DcyLP3"
            );
          }
          return { [key]: data };
        })
      );

      const details = Object.assign({}, ...detailsArray);

      const enrichedDetails = Object.fromEntries(
        Object.entries(details).map(([key, value]) => [
          key,
          {
            ...(value as Record<string, any>),
            owners: (value as Record<string, any>).owners || "No owner data available",
          },
        ])
      );

      setZodiacDetails(enrichedDetails);

      // Sort zodiac signs based on the total number of owners (highest to lowest)
      const sortedSigns = zodiacSigns.sort((a, b) => {
        const aOwners = enrichedDetails[a.collectionPublicKey]?.[0]?.items?.length || 0;
        const bOwners = enrichedDetails[b.collectionPublicKey]?.[0]?.items?.length || 0;
        return bOwners - aOwners;
      });

      setSortedZodiacSigns(sortedSigns);
    } catch (error) {
      console.error("Error fetching assets:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (zodiacSigns.length > 0) {
      fetchAssets();
    }
  }, [zodiacSigns]);

  const maskWalletAddress = (address: string): string => {
    if (address.length <= 8) return address;
     return `${address.slice(0, 4)}******${address.slice(-4)}`;
    //return address;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-8">
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        Top Wallets Holding Zodiac NFTs
      </h1>
      {isLoading && (
        <div className="flex items-center justify-center">
          <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
          <p className="mt-4 text-center text-xl font-semibold text-black">Loading assets...</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedZodiacSigns.map((sign) => (
          <div
            key={sign.collectionPublicKey}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{sign.icon}</div>
                <h2 className="text-3xl font-bold text-black">
                <a
                  href={`/CardDetails/?zodiac=${sign.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {sign.name}{" "}
                </a>
                ({zodiacDetails[sign.collectionPublicKey]?.[0]?.items
                  ? new Set(
                    zodiacDetails[sign.collectionPublicKey][0].items.map(
                    (item: any) => item.ownership?.owner
                    )
                  ).size
                  : 0}{""}
                )
                </h2>
            </div>

            <div className="mt-4 w-full max-h-[250px] overflow-y-auto scrollbar scrollbar-visible">
              {zodiacDetails[sign.collectionPublicKey]?.[0]?.items ? (
              <div className="space-y-2">
                {Object.entries(
                zodiacDetails[sign.collectionPublicKey][0].items.reduce(
                  (acc: Record<string, number>, item: any) => {
                  const owner = item.ownership?.owner || "No owner data available";
                  acc[owner] = (acc[owner] || 0) + 1;
                  return acc;
                  },
                  {}
                )
                )
                .sort(([, countA], [, countB]) => (countB as number) - (countA as number)) // Sort by count
                .map(([owner, count], index) => (
                  <div
                  key={index}
                  className={`flex justify-between items-center p-2 rounded ${
                    index === 0
                    ? "bg-yellow-200"
                    : index === 1
                    ? "bg-gray-200"
                    : "bg-gray-100"
                  }`}
                  >
                  <span className="text-gray-700 font-medium">
                    {maskWalletAddress(owner as string)}
                  </span>
                  <span className="text-gray-500">{count as number} items</span>
                  </div>
                ))}
              </div>
              ) : (
              <p className="text-gray-500 text-center">No details available</p>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};