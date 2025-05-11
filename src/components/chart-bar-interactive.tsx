"use client"

import { TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { getCurrentZodiacSignTopN } from "@/stores/useCandiZodiacSignsStore"
import { getCandyMachinesBalance } from "@/lib/candymachine/fetchCandyMachines"
import { PublicKey } from "@metaplex-foundation/umi"

const initialChartData = [
  { zodiac: "Capricorn", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Aquarius", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Pisces", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Aries", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Taurus", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Gemini", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Cancer", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Leo", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Virgo", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Libra", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Scorpio", burn: 50000000, itemsRedeemed: 0 },
  { zodiac: "Sagittarius", burn: 50000000, itemsRedeemed: 0 },
]

const chartConfig = {
  burn: {
    label: `🔥`,
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export const Component = () => {
  const [chartData, setChartData] = useState(initialChartData)
  const [totalburn, settotalburn] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentSigns = await getCurrentZodiacSignTopN(12)
        if (currentSigns) {
          const collections = await Promise.all(
            currentSigns.map(async (sign) => {
              const balance = await getCandyMachinesBalance([sign.machinePublicKey as PublicKey])
              return balance[0]
            })
          )

          const zodiacMap = new Map(
            currentSigns.map((sign, index) => [
              sign.name,
              collections[index],
            ])
          )

          const updatedChartData = initialChartData.map((data) => {
            const collection = zodiacMap.get(data.zodiac)
            if (collection) {
                const burnAmount = (collection.tokenBurnAmount || 0) * collection.itemsRedeemed;
                settotalburn((prevTotal) => prevTotal + burnAmount);
                return {
                ...data,
                itemsRedeemed: collection.itemsRedeemed || 0,
                burn: 50000000 - burnAmount,
                }
            }
            return data
          })

          setChartData(updatedChartData) // Update state to trigger re-render
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-black dark:text-white">
          Candibar Token Burn Progress by Zodiac Sign
        </CardTitle>
        <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tabular-nums text-black dark:text-white p-1">
         🔥 Total Burned: {Number(4600000).toLocaleString()} 
        </CardTitle>
         <CardDescription className="break-words">
           Token Address: {process.env.NEXT_PUBLIC_TOKEN}
         </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="zodiac"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />

            <Bar
              dataKey="burn"
              radius={4}
              isAnimationActive={false}
              shape={(props) => {
                const { x, y, width, height, payload } = props
                const fillColor =
                  payload.burn === 50000000
                    ? "hsl(var(--chart-2))"
                    : "hsl(var(--chart-1))"
                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fillColor}
                    radius={4}
                  />
                )
              }}
              label={(props) => {
                const { x, y, value } = props
                if (window.innerWidth > 640) {
                  return (
                    <text
                      x={x + 30}
                      y={y - 10}
                      fill="hsl(var(--foreground))"
                      fontSize={12}
                      textAnchor="middle"
                    >
                      {value !== 50000000 ? " 🔥 " : " "}
                      {value.toLocaleString()}
                    </text>
                  )
                }
                return null
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Each Candi Zodiac aims to burn to zero{" "}
          <TrendingDown className="h-4 w-4" />
          0
        </div>
        <div className="leading-none text-muted-foreground">
          Starting supply: 50 million candibar tokens across 12 Candi Zodiac
          NFT collections.
        </div>
        <div className="leading-none text-muted-foreground p-1">
          <strong>Disclaimer: Data Accuracy</strong>
          <div className="text-primary p-1"></div>
          The information presented on this website, including but not limited
          to cryptocurrency prices, market capitalization, token supply, and
          other statistical data, is provided for general informational purposes
          only. While we strive to ensure the accuracy and timeliness of the
          data, we do not guarantee its completeness, reliability, or
          availability at all times.
          <br /> <br />
          Cryptocurrency markets are highly volatile and data may change
          rapidly. Our statistics may be sourced from third-party APIs or
          external platforms, which are subject to their own limitations and
          delays. As such, we do not accept any liability for losses or damages
          arising from the use of or reliance on the data displayed on this
          site.
          <br /> <br />
          Always conduct your own research and consult a financial advisor
          before making any investment decisions.
        </div>
      </CardFooter>
    </Card>
  )
}