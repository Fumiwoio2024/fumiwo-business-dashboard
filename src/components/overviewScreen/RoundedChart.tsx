"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@components/ui/chart";
import { OverviewButton } from "@components/global/Buttons";
import { SessionCardTitle } from "@components/applicationSession/SessionCardTypography";

export const description = "A bar chart";

const chartData = [
  { month: "January", score: 186 },
  { month: "February", score: 305 },
  { month: "March", score: 237 },
  { month: "April", score: 73 },
  { month: "May", score: 209 },
  { month: "June", score: 214 },
];

const chartConfig = {
  score: {
    label: "Score",
    color: "#011D7B",
  },
} satisfies ChartConfig;

export const RoundedChart = () => {
  return (
    <div>
      <div className="mb-8 flex justify-between">
        <SessionCardTitle
          title="Avg credit score distribution"
          description=""
        />
        <OverviewButton>
          <div className="flex items-center">
            This week
            <span className="ml-2.5 text-paraGray/70">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.96004 4.97461L6.70004 8.23461C6.31504 8.61961 5.68504 8.61961 5.30004 8.23461L2.04004 4.97461"
                  stroke="#718096"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </OverviewButton>
      </div>

      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="score"
            fill="var(--color-score)"
            radius={20}
            barSize={20}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
