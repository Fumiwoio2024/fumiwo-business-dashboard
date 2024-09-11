import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@components/ui/chart";
import Legend from "./Legend";

export const description = "A linear area chart";

const chartData = [
  { month: "January", newDevices: 100, oldDevices: 80 },
  { month: "February", newDevices: 50, oldDevices: 30 },
  { month: "March", newDevices: 150, oldDevices: 120 },
  { month: "April", newDevices: 100, oldDevices: 90 },
  { month: "May", newDevices: 300, oldDevices: 400 },
  { month: "June", newDevices: 200, oldDevices: 280 },
  { month: "July", newDevices: 350, oldDevices: 370 },
  { month: "August", newDevices: 280, oldDevices: 220 },
  { month: "September", newDevices: 450, oldDevices: 400 },
  { month: "October", newDevices: 390, oldDevices: 320 },
  { month: "November", newDevices: 580, oldDevices: 460 },
  { month: "December", newDevices: 540, oldDevices: 480 },
];

const chartConfig = {
  newDevices: {
    label: "New Devices",
    color: "#34B53A",
  },
  oldDevices: {
    label: "Old Devices",
    color: "#011D7B",
  },
} satisfies ChartConfig;

export const SparkLine = () => {
  return (
    <div className="">
      <ChartContainer config={chartConfig} className="">
        <AreaChart accessibilityLayer data={chartData} className="">
          <CartesianGrid vertical={false} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" hideLabel />}
          />
          <Area
            dataKey="newDevices"
            type="linear"
            // fill="var(--color-desktop)"
            fillOpacity={0}
            stroke="var(--color-newDevices)"
            strokeWidth={2}
          />
          <Area
            dataKey="oldDevices"
            type="linear"
            // fill="var(--color-desktop)"
            fillOpacity={0}
            stroke="var(--color-oldDevices)"
            strokeWidth={2}
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
