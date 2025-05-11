"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

const chartData = [
  { date: "2024-01-01", capricorn: 222, aquarius: 150, pisces: 180, aries: 200, taurus: 170, gemini: 190, cancer: 210, leo: 230, virgo: 160, libra: 220, scorpio: 240, sagittarius: 250 },
  { date: "2024-02-01", capricorn: 97, aquarius: 180, pisces: 140, aries: 220, taurus: 150, gemini: 200, cancer: 180, leo: 240, virgo: 170, libra: 210, scorpio: 230, sagittarius: 260 },
  { date: "2024-03-01", capricorn: 167, aquarius: 120, pisces: 160, aries: 190, taurus: 180, gemini: 170, cancer: 200, leo: 220, virgo: 150, libra: 230, scorpio: 250, sagittarius: 270 },
  { date: "2024-04-01", capricorn: 242, aquarius: 260, pisces: 200, aries: 240, taurus: 210, gemini: 230, cancer: 250, leo: 270, virgo: 190, libra: 260, scorpio: 280, sagittarius: 300 },
  { date: "2024-05-01", capricorn: 373, aquarius: 290, pisces: 220, aries: 260, taurus: 230, gemini: 250, cancer: 270, leo: 290, virgo: 210, libra: 280, scorpio: 300, sagittarius: 320 },
  { date: "2024-06-01", capricorn: 301, aquarius: 340, pisces: 250, aries: 280, taurus: 260, gemini: 270, cancer: 290, leo: 310, virgo: 230, libra: 300, scorpio: 320, sagittarius: 340 },
  { date: "2024-07-01", capricorn: 245, aquarius: 180, pisces: 200, aries: 220, taurus: 210, gemini: 230, cancer: 250, leo: 270, virgo: 190, libra: 240, scorpio: 260, sagittarius: 280 },
  { date: "2024-08-01", capricorn: 409, aquarius: 320, pisces: 280, aries: 300, taurus: 290, gemini: 310, cancer: 330, leo: 350, virgo: 270, libra: 340, scorpio: 360, sagittarius: 380 },
  { date: "2024-09-01", capricorn: 59, aquarius: 110, pisces: 90, aries: 120, taurus: 100, gemini: 130, cancer: 150, leo: 170, virgo: 110, libra: 140, scorpio: 160, sagittarius: 180 },
  { date: "2024-10-01", capricorn: 261, aquarius: 190, pisces: 170, aries: 200, taurus: 180, gemini: 210, cancer: 230, leo: 250, virgo: 190, libra: 220, scorpio: 240, sagittarius: 260 },
  { date: "2024-11-01", capricorn: 327, aquarius: 350, pisces: 300, aries: 330, taurus: 310, gemini: 340, cancer: 360, leo: 380, virgo: 320, libra: 370, scorpio: 390, sagittarius: 410 },
  { date: "2024-12-01", capricorn: 292, aquarius: 210, pisces: 190, aries: 220, taurus: 200, gemini: 230, cancer: 250, leo: 270, virgo: 210, libra: 240, scorpio: 260, sagittarius: 280 },
]

type ChartData = {
  date: string
} & Record<string, number>

const zodiacColors = {
  capricorn: "hsl(210, 70%, 50%)",
  aquarius: "hsl(220, 70%, 50%)",
  pisces: "hsl(230, 70%, 50%)",
  aries: "hsl(240, 70%, 50%)",
  taurus: "hsl(250, 70%, 50%)",
  gemini: "hsl(260, 70%, 50%)",
  cancer: "hsl(270, 70%, 50%)",
  leo: "hsl(280, 70%, 50%)",
  virgo: "hsl(290, 70%, 50%)",
  libra: "hsl(300, 70%, 50%)",
  scorpio: "hsl(310, 70%, 50%)",
  sagittarius: "hsl(320, 70%, 50%)",
}

// Define the chart configuration
const chartConfig = {
  capricorn: {
    label: "Capricorn",
    color: "hsl(var(--chart-1))",
  },
  aquarius: {
    label: "Aquarius",
    color: "hsl(var(--chart-2))",
  },
  pisces: {
    label: "Pisces",
    color: "hsl(var(--chart-3))",
  },
  aries: {
    label: "Aries",
    color: "hsl(var(--chart-4))",
  },
  taurus: {
    label: "Taurus",
    color: "hsl(var(--chart-5))",
  },
  gemini: {
    label: "Gemini",
    color: "hsl(var(--chart-6))",
  },
  cancer: {
    label: "Cancer",
    color: "hsl(var(--chart-7))",
  },
  leo: {
    label: "Leo",
    color: "hsl(var(--chart-8))",
  },
  virgo: {
    label: "Virgo",
    color: "hsl(var(--chart-9))",
  },
  libra: {
    label: "Libra",
    color: "hsl(var(--chart-10))",
  },
  scorpio: {
    label: "Scorpio",
    color: "hsl(var(--chart-11))",
  },
  sagittarius: {
    label: "Sagittarius",
    color: "hsl(var(--chart-12))",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("2024")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    return date.getFullYear().toString() === timeRange
  })

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Candibar Tokens Burned</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:hidden"> Zodiac NFTs</span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="flex"
          >
            <ToggleGroupItem value="2024" className="h-8 px-2.5">
              2024
            </ToggleGroupItem>
            <ToggleGroupItem value="2023" className="h-8 px-2.5">
              2023
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              {Object.keys(zodiacColors).map((zodiac) => (
                <linearGradient key={zodiac} id={`fill${zodiac}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={zodiacColors[zodiac]} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={zodiacColors[zodiac]} stopOpacity={0.1} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            {Object.keys(zodiacColors).map((zodiac) => (
              <Area
                key={zodiac}
                dataKey={zodiac}
                type="natural"
                fill={`url(#fill${zodiac})`}
                stroke={zodiacColors[zodiac]}
                stackId="a"
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}