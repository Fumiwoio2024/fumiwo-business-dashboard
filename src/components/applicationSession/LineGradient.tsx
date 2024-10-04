import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@components/ui/chart";
import { SessionCardTitle } from "@components/applicationSession/SessionCardTypography";
import Legend from "../overviewScreen/Legend";
import { TClient } from "@type/global.types";

export const description = "A linear area chart";

// const chartData = [
//   { month: "January", score: 100 },
//   { month: "February", score: 50 },
//   { month: "March", score: 150 },
//   { month: "April", score: 100 },
//   { month: "May", score: 300 },
//   { month: "June", score: 200 },
//   { month: "July", score: 350 },
//   { month: "August", score: 280 },
//   { month: "September", score: 450 },
//   { month: "October", score: 390 },
//   { month: "November", score: 580 },
//   { month: "December", score: 540 },
// ];

const chartConfig = {
  score: {
    label: "Credit Score",
    color: "#011D7B",
  },
} satisfies ChartConfig;

export const LineGradient = ({ data }: { data: TClient | undefined }) => {
  // const formatter = new Intl.NumberFormat("en-NG", {
  //   style: "ordinal",
  // });
  const chartData = data?.digitalCreditInfoHistory.map((item, idx) => ({
    session: `Application ${idx + 1}`,
    score: item.creditScore,
  }));
  return (
    <div className="space-y-10">
      <div className="mb-8 flex justify-between">
        <SessionCardTitle title="Credit scores overtime" description="" />
      </div>

      <ChartContainer config={{ ...chartConfig }} className="h-80 w-full">
        <AreaChart accessibilityLayer data={chartData} className="">
          <CartesianGrid vertical={false} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <XAxis
            dataKey="session"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            // tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" hideLabel />}
          />
          <defs>
            <linearGradient id="fillscore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0067FB" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0067FB" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            dataKey="score"
            type="natural"
            fill="url(#fillscore)"
            fillOpacity={0.2}
            stroke="var(--color-score)"
            strokeWidth={3}
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>

      <div className="mt-5">
        <Legend
          data={Object.values(chartConfig).map((value) => ({
            color: value.color,
            label: value.label,
          }))}
        />
      </div>
    </div>
  );
};
