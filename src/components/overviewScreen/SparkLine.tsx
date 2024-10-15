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
// type TStats = {
//   timeUnit: number;
//   clientsWithLoans: number;
//   clientsWithoutLoans: number;
// }[];
type TStats =  Record<string,number>[];


// const chartData = [{ timeKey: "January", newDevices: 100, oldDevices: 80 }];
// Eg of timekey:  January, week 1, Saturday


  const addZeroStats = (stats: TStats, isMonthly: boolean): TStats => {
    const requiredLength = isMonthly ? 12 : 7;
    const statsCopy = [...stats];

    // Define a zero-filled object template
    const zeroObject = {
      timeUnit: 0,
      clientsWithLoans: 0,
      clientsWithoutLoans: 0,
      settledOnTime: 0,
      settledLessThan30DaysLate: 0,
      settledMoreThan30DaysLate: 0,
      settledMoreThan60DaysLate: 0,
      settledMoreThan90DaysLate: 0,
    };

    const statSet = statsCopy.map((stat) => stat.timeUnit);

    // If the array has fewer than 12 elements, fill it with zero objects
    for (let i = 1; i <= requiredLength; i++) {
      !statSet.includes(i) && statsCopy.push({ ...zeroObject, timeUnit: i });
    }

    // sort in ascending order of month/day
    return statsCopy.sort((a, b) => a.timeUnit - b.timeUnit);
  };

const loanStatChartConfig = {
  clientsWithLoans: {
    label: <p className="pr-2">Clients with repayment data </p>,
    color: "#011D7B",
  },
  clientsWithoutLoans: {
    label: <p className="pr-2">Clients without repayment data </p>,
    color: "#009851",
  },
} satisfies ChartConfig;

const settlementChartConfig = {
  settledOnTime: {
    label: <p className="pr-2">On-time payments</p>,
    color: "#009851",
  },
  settledLessThan30DaysLate: {
    label: <p className="pr-2">Less than 30 days late</p>,
    color: "#011D7B",
  },
  settledMoreThan30DaysLate: {
    label: <p className="pr-2">More than 30 days late</p>,
    color: "#FF9066",
  },
  settledMoreThan60DaysLate: {
    label: <p className="pr-2">More than 60 days</p>,
    color: "#000000",
  },
  settledMoreThan90DaysLate: {
    label: <p className="pr-2">More than 90 days late</p>,
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

  const isRepaymentData = type === "Repayment data";
  const isMonthly = result.timeFormat === "year";
  const activeConfig = isRepaymentData
    ? loanStatChartConfig
    : settlementChartConfig;

  const chartData = addZeroStats(result.stats, isMonthly).map((data) => ({
    timeKey: moment()
      ?.[isMonthly ? "month" : "day"](data.timeUnit - 1)
      .format(isMonthly ? "MMM" : "dd"),
    ...data,
  }));

  return (
    <div>
      <ChartContainer config={activeConfig} className="">
        <AreaChart accessibilityLayer data={chartData} className="">
          <CartesianGrid vertical={false} />
          <YAxis tickLine={false} axisLine={false} min={1} tickMargin={8} />
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
