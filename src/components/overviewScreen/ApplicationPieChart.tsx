import { HighlightScope, pieArcLabelClasses, PieChart } from "@mui/x-charts";
import { timeFilterOptions } from "@utils/data";

import {
  useQBusinessStats,
  useQRecommendationStats,
} from "@hooks/api/queries/analytics.queries";
import { checkRecommendType } from "@helpers/functions/formatRecommendation";
import { useState } from "react";
import NewDropDown from "@components/global/NewDropDown";
import { SessionCardTitle } from "@components/applicationSession/SessionCardTypography";
import { pluralize } from "@helpers/functions/pluralize";

const ApplicationsPieChart = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    timeFilterOptions[0],
  );

  const { result } = useQRecommendationStats({
    startDate: selectedFilterOption.startDate,
    endDate: selectedFilterOption.endDate,
  });
  const { result: stats } = useQBusinessStats();

  const getCount = (percentage: number) => {
    return stats && stats.totalClients
      ? `${pluralize(Math.round((percentage * stats?.totalClients) / 100), "Client")} `
      : `${percentage}%`;
  };
  const pieData =
    result?.map((item, index) => ({
      id: index,
      value: Number(item.percentage),
      label: checkRecommendType(
        item.recommendation,
        "Review",
        "Rejected",
        "Approved",
      ),
      color: checkRecommendType(
        item.recommendation,
        "#FCBE2D",
        "#FF0000",
        "#0BE781",
      ),
    })) || [];

  return (
    <>
      <div className="flex justify-between">
        <SessionCardTitle
          title="Applications"
          description="Credit decisions overview"
        />
        <NewDropDown
          options={timeFilterOptions}
          selectedOption={selectedFilterOption}
          setSelectedOption={setSelectedFilterOption}
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="py-3">
          <div className="relative h-fit w-fit">
            <PieChart
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              height={270}
              width={270}
              slotProps={{ legend: { hidden: true } }}
              series={[
                {
                  data: pieData.sort(
                    (a, b) => b.label?.localeCompare(a.label || "") || 0,
                  ),
                  innerRadius: 75,
                  valueFormatter: ({ value }) => `${getCount(value)}`,
                  // sortingValues: (a, b) => a - b,
                  arcLabel: (params) =>
                    params.value ? String(params.value) + "%" : "",
                  highlightScope: {
                    highlighted: "item", //  none | item   | series
                    faded: "global", //  none | series | global
                  } as HighlightScope,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "Poppins",
                },
              }}
            />
            {result && result.length > 0 && (
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F8FC]" />
            )}
          </div>
          <div className="mt-8 flex justify-center gap-5">
            {pieData
              .sort((a, b) => b.label?.localeCompare(a.label || "") || 0)
              .map((item, index) => (
                <>
                  <div className="text-center">
                    <p
                      style={{ color: item.color }}
                      className="text-lg font-medium"
                    >
                      {item.value}%
                    </p>
                    <h5 style={{ color: item.color }} className="text-sm">
                      {item.label}
                    </h5>
                  </div>
                  {index !== pieData.length - 1 && (
                    <svg
                      width="1"
                      height="57"
                      viewBox="0 0 1 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 56.1787L0 0.678707H0.566327L0.566327 56.1787H0Z"
                        fill="#E7E8F2"
                      />
                    </svg>
                  )}
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationsPieChart;
