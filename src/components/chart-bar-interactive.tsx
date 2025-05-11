"use client"

import { TrendingDown, TrendingUp } from "lucide-react"
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

const chartData = [
  { zodiac: "Capricorn", burn: 50000000-400000, color: "hsl(var(--chart-2))" },
  { zodiac: "Aquarius", burn: 50000000-200000, color: "hsl(var(--chart-1))" },
  { zodiac: "Pisces", burn: 50000000, color: "hsl(var(--chart-1))" },
  { zodiac: "Aries", burn: 50000000-200000, color: "hsl(var(--chart-1))" },
  { zodiac: "Taurus", burn: 50000000-2400000, color: "hsl(var(--chart-1))" },
  { zodiac: "Gemini", burn: 50000000-400000, color: "hsl(var(--chart-1))" },
  { zodiac: "Cancer", burn: 50000000-600000, color: "hsl(var(--chart-1))" },
  { zodiac: "Leo", burn: 50000000-200000, color: "hsl(var(--chart-1))" },
  { zodiac: "Virgo", burn: 50000000, color: "hsl(var(--chart-1))" },
  { zodiac: "Libra", burn: 50000000-200000, color: "hsl(var(--chart-1)" },
  { zodiac: "Scorpio", burn: 50000000, color: "hsl(var(--chart-1))" },
  { zodiac: "Sagittarius", burn: 50000000, color: "hsl(var(--chart-1))" },
]

const chartConfig = {
  burn: {
    label: `🔥`,
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-black dark:text-white">Candibar Token Burn Progress</CardTitle>
        <CardDescription></CardDescription>
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
            {/* <Bar
              dataKey="burn"
              radius={4}
              isAnimationActive={false}
              shape={(props) => {
              const { x, y, width, height, payload } = props;
              return (
                <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={payload.color}
                radius={4}
                />
              );
              }}
            /> */}
            <Bar dataKey="burn" fill="var(--color-burn)" radius={4} />
            </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Each Candi Zodiac aims to burn to zero <TrendingDown className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Starting supply: 50 million candibar tokens accross 12 Candi Zodiac NFT collections.
        </div>
        <div className="leading-none text-muted-foreground p-1">
          <strong>Disclaimer: Data Accuracy</strong>
            <div className="text-primary p-1"></div>
              The information presented on this website, including but not limited to cryptocurrency prices, market capitalization, token supply, and other statistical data, is provided for general informational purposes only. While we strive to ensure the accuracy and timeliness of the data, we do not guarantee its completeness, reliability, or availability at all times.
            </div>
            <div className="text-primary">
              Cryptocurrency markets are highly volatile and data may change rapidly. Our statistics may be sourced from third-party APIs or external platforms, which are subject to their own limitations and delays. As such, we do not accept any liability for losses or damages arising from the use of or reliance on the data displayed on this site.
            </div>
            <div className="text-primary">
              Always conduct your own research and consult a financial advisor before making any investment decisions.
            </div>
      </CardFooter>
    </Card>
  )
}
