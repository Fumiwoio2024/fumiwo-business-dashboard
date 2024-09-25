import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@components/ui/chart";
import Legend from "./Legend";
import {
  useQLoanRepaymentSettlementStats,
  useQLoanRepaymentStats,
} from "@hooks/api/queries/analytics.queries";
import moment from "moment";

export const description = "A linear area chart";

// const chartData = [{ timeKey: "January", newDevices: 100, oldDevices: 80 }];
// Eg of timekey:  January, week 1, Saturday

const loanStatChartConfig = {
  clientsWithLoans: {
    label: "Clients with loans",
    color: "#011D7B",
  },
  clientsWithoutLoans: {
    label: "Clients without loans",
    color: "#009851",
  },
} satisfies ChartConfig;

const settlementChartConfig = {
  settledOnTime: {
    label: "On-time payments",
    color: "#009851",
  },
  settledLessThan30DaysLate: {
    label: "Less than 30 days late",
    color: "#011D7B",
  },
  settledMoreThan30DaysLate: {
    label: "More than 30 days late",
    color: "#FF9066",
  },
  settledMoreThan60DaysLate: {
    label: "More than 60 days",
    color: "#000000",
  },
  settledMoreThan90DaysLate: {
    label: "More than 90 days late",
    color: "#FF0000",
  },
} satisfies ChartConfig;

export const SparkLine = ({
  type,
  startDate,
  endDate,
}: {
  startDate: moment.Moment;
  endDate: moment.Moment;
  type?: string;
}) => {
  const Query =
    type === "Repayment data"
      ? useQLoanRepaymentStats
      : useQLoanRepaymentSettlementStats;

  const { result } = Query({ startDate, endDate });
  if (!result) return <></>;

  const isRepaymentData = type === "Repayment data" && "timeFormat" in result;

  const activeConfig = isRepaymentData
    ? loanStatChartConfig
    : settlementChartConfig;

  const chartData = isRepaymentData
    ? result.stats.map((data) => ({
        timeKey: moment()[result.timeFormat](data.timeUnit).format("MMM"),
        clientsWithLoans: 1,
        clientsWithoutLoans: 1,
      }))
    : Object.entries(result.stats).map(([timeKey, data]) => ({
        timeKey,
        ...data,
      }));

  return (
    <div>
      <ChartContainer config={activeConfig} className="">
        <AreaChart accessibilityLayer data={chartData} className="">
          <CartesianGrid vertical={false} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <XAxis
            dataKey="timeKey"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" hideLabel />}
          />
          {Object.entries(activeConfig).map(([key, value]) => (
            <Area
              dataKey={key}
              type="linear"
              fillOpacity={0}
              stroke={value.color}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </ChartContainer>

      <div className="mt-5">
        <Legend
          data={Object.values(activeConfig).map((value) => ({
            color: value.color,
            label: value.label,
          }))}
        />
      </div>
    </div>
  );
};
