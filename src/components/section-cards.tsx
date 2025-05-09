import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs grid grid-flow-col auto-cols-fr gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-white lg:px-6 dark:dark:*:data-[slot=card]:bg-gray-950">
      <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>Total Circulating Supply</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
        3 Billion
        </CardTitle>
        <div className="absolute right-4 top-4">
        </div>
      </CardHeader>
    
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
        100% of Total Supply
        </div>
        <div className="text-gray-500 dark:text-gray-400">
        2 Billion available for trading (66.67%)
        </div>
        <div className="text-gray-500 dark:text-gray-400">
        1 Billion in platform escrow (33.33%)
        </div>
      </CardFooter>

      </Card>
      <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>Token Burn Target</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
        600 Million
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
        20% of Total Supply
        </div>
        <div className="text-gray-500 dark:text-gray-400">
        Bun tokens in exchange for NFTs
        </div>
      </CardFooter>
      </Card>
    </div>
  )
}
