import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import fetchMetadataByMint from "../lib/mpl-token-metadata/fetchMetadataByMint";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import { DigitalAsset, JsonMetadata } from "@metaplex-foundation/mpl-token-metadata";
import fetchDigitalAssetByMint from "@/lib/mpl-token-metadata/fetchDigitalAssetByMint";
import { formatTokenAmount } from "@/lib/utils";

export function SectionCards() {

  const [candibarToken, setcandibarToken] = useState<DigitalAsset | undefined>(undefined);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const asset = await fetchDigitalAssetByMint(process.env.NEXT_PUBLIC_TOKEN);
        setcandibarToken(asset);
      } catch (error) {
        console.error("Error fetching asset:", error);
      }
    };

    fetchTokenData();
  }, []);

  return (
    <div className="*:data-[slot=card]:shadow-xs grid grid-flow-col auto-cols-fr gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-white lg:px-6 dark:dark:*:data-[slot=card]:bg-gray-950">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Targeted Circulating Supply</CardDescription>
          <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tabular-nums text-black dark:text-white">
            2,435,137,978
          </CardTitle>
           <div className="absolute right-4 top-4">
          </div>
          <div className="absolute right-4 top-4">
          </div>
        </CardHeader>

        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-black dark:text-white">
            Current Supply: {Number(formatTokenAmount(candibarToken?.mint.supply,8)).toLocaleString() || "Supply data not available"}
          </div>
          {/* <div className="text-gray-500 dark:text-gray-400">
            2 Billion available for trading (66.67%)
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            1 Billion locked in platform escrow (33.33%)
          </div> */}
        </CardFooter>

      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Targeted Token Burn</CardDescription>
          <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tabular-nums text-black dark:text-white">
            600,000,000
          </CardTitle>
          <div className="absolute right-4 top-4">
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Burn tokens in exchange for Zodiac NFTs
          </div>
          {/* <div className="text-gray-500 dark:text-gray-400">
            20% from 3 Billion Circulating Supply
          </div> */}
        </CardFooter>
      </Card>
    </div>
  )
}
