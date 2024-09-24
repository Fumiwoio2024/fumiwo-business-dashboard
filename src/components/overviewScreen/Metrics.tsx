import { SessionCardTitle } from "@components/applicationSession/SessionCardTypography";
import Card from "@components/global/Card";
import { gridClasses } from "@mui/material/Grid";
import { BarChart, pieArcLabelClasses, PieChart } from "@mui/x-charts";
import { SparkLine } from "./SparkLine";
import Legend from "./Legend";
import { useState } from "react";
import NewDropDown from "@components/global/NewDropDown";
import { timeFilterOptions } from "@utils/data";
import {
  useQDigitalCreditRatingStats,
  useQRecommendationStats,
} from "@hooks/api/queries/analytics.queries";
import { checkRecommendType } from "@/helpers/functions/checkRecommendedType";
import { scoreRecommendations } from "@utils/constants";

// const uData = [40000, 30000, 20000, 278, 18900, 23900, 34900];
// const pData = [24000, 13980, 98000, 39080, 48000, 38000, 43000];
// const xLabels = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// const barData = [
//   {
//     data: pData,
//     label: "Very Poor",
//     id: "vPoor",
//     stack: "total",
//     color: "#E70033",
//   },
//   {
//     data: uData,
//     label: "Poor",
//     id: "poor",
//     stack: "total",
//     color: "#FF7643",
//   },
//   {
//     data: pData,
//     label: "Fair",
//     id: "fair",
//     stack: "total",
//     color: "#F6F002",
//   },
//   {
//     data: uData,
//     label: "Good",
//     id: "good",
//     stack: "total",
//     color: "#7ED957",
//   },
//   {
//     data: pData,
//     label: "Excellent",
//     id: "excellent",
//     stack: "total",
//     color: "#2B8F3C",
//   },
// ];

const AvgScoreBarChart = ({
  startDate,
  endDate,
}: {
  startDate: moment.Moment;
  endDate: moment.Moment;
}) => {
  const { result } = useQDigitalCreditRatingStats({ startDate, endDate });
  if (!result) return <></>;
  const xLabels = result ? Object.keys(result?.creditRatingCounts) : [];

  const veryPoorData = xLabels.map(
    (month) =>
      result.creditRatingCounts[month as keyof typeof result.creditRatingCounts]
        .very_poor,
  );
  const poorData = xLabels.map(
    (month) =>
      result.creditRatingCounts[month as keyof typeof result.creditRatingCounts]
        .poor,
  );
  const fairData = xLabels.map(
    (month) =>
      result.creditRatingCounts[month as keyof typeof result.creditRatingCounts]
        .fair,
  );
  const goodData = xLabels.map(
    (month) =>
      result.creditRatingCounts[month as keyof typeof result.creditRatingCounts]
        .good,
  );
  const excellentData = xLabels.map(
    (month) =>
      result.creditRatingCounts[month as keyof typeof result.creditRatingCounts]
        .excellent,
  );

  // Define the labels for the x-axis
  // const xLabels = months;

  // Create the barData array based on the ratings
  const barData = [
    {
      data: veryPoorData,
      stack: "total",
      // label: "Very Poor",
      // id: "vPoor",
      // color: "#E70033",
      ...scoreRecommendations[0],
    },
    {
      data: poorData,
      stack: "total",
      // label: "Poor",
      // id: "poor",
      // color: "#FF7643",
      ...scoreRecommendations[1],
    },
    {
      data: fairData,
      stack: "total",
      // label: "Fair",
      // id: "fair",
      // color: "#F6F002",
      ...scoreRecommendations[2],
    },
    {
      data: goodData,
      stack: "total",
      // label: "Good",
      // id: "good",
      // color: "#7ED957",
      ...scoreRecommendations[3],
    },
    {
      data: excellentData,
      stack: "total",
      // label: "Excellent",
      // id: "excellent",
      // color: "#2B8F3C",
      ...scoreRecommendations[4],
    },
  ];
  return (
    <div>
      <BarChart
        className="w-full"
        width={700}
        height={400}
        margin={{ left: 50 }}
        grid={{ horizontal: true }}
        slotProps={{ legend: { hidden: true } }}
        series={barData}
        yAxis={[
          {
            disableLine: true,
            disableTicks: true,
            valueFormatter: (value) =>
              value > 1000
                ? `${(value / 1000).toLocaleString("en-NG", { maximumFractionDigits: 1 })}K`
                : value,
          },
        ]}
        xAxis={[
          {
            data: xLabels.map((month) => month.slice(0, 3)),
            scaleType: "band",
            disableLine: true,
            disableTicks: true,
          },
        ]}
        sx={{
          [`& .${gridClasses.root}`]: {
            fill: "red",
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "Poppins",
            borderColor: "red",
            backGroundColor: "#FF0000",
          },
        }}
      />

      <Legend data={barData} />
    </div>
  );
};

const ApplicationsPieChart = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    timeFilterOptions[0],
  );

  const { result } = useQRecommendationStats({
    startDate: selectedFilterOption.startDate,
    endDate: selectedFilterOption.endDate,
  });

  // const review = result?.filter((item) => item.recommendation === "review");
  // const reject = result?.filter((item) => item.recommendation === "reject");
  // const approve = result?.filter((item) => item.recommendation === "approve");

  // const pieData = [
  //   {
  //     id: index,
  //     value: Number(item.percentage),
  //     label: checkRecommendType(
  //       item.recommendation,
  //       "Review",
  //       "Rejected",
  //       "Approved",
  //     ),
  //     color: checkRecommendType(
  //       item.recommendation,
  //       "#FCBE2D",
  //       "#FF0000",
  //       "#0BE781",
  //     ),
  //   },
  // ];

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
              title="Applications"
              slotProps={{ legend: { hidden: true } }}
              series={[
                {
                  data: pieData,
                  innerRadius: 75,
                  arcLabel: (params) =>
                    params.value ? String(params.value) + "%" : "",
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
            {pieData.map((item, index) => (
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

const metricOptions = [
  {
    id: "1",
    title: "Avg credit score distribution",
    desc: "Distribution of clients' credit scores",
    Component: AvgScoreBarChart,
  },
  {
    id: "2",
    title: "Repayment data",
    desc: "Distribution of clients' repayment data",
    Component: SparkLine,
  },
  {
    id: "3",
    title: "Repayment trends",
    desc: "Distribution of clients' repayment trends",
    Component: SparkLine,
  },
];

const Metrics = () => {
  const [selectedChart, setSelectedChart] = useState(metricOptions[0]);
  const [selectedFilterOption, setSelectedOption] = useState(
    timeFilterOptions[0],
  );

  return (
    <section className="grid grid-cols-3 gap-7">
      <Card className="col-span-2 h-[550px] space-y-8">
        <div className="flex justify-between">
          <NewDropDown
            options={metricOptions}
            selectedOption={selectedChart}
            setSelectedOption={setSelectedChart}
          >
            <SessionCardTitle
              isDropdown
              title={selectedChart.title}
              description={selectedChart.desc}
            />
          </NewDropDown>

          <NewDropDown
            options={timeFilterOptions}
            selectedOption={selectedFilterOption}
            setSelectedOption={setSelectedOption}
          />
        </div>

        <selectedChart.Component
          endDate={selectedFilterOption.endDate}
          startDate={selectedFilterOption.startDate}
          type={selectedChart.title}
        />
      </Card>

      <Card className="flex flex-col pb-0">
        <ApplicationsPieChart />
      </Card>
    </section>
  );
};

export default Metrics;

// const AvgScoreDistributionBarChart = () => {
//   return (
//     <>
//       <div className="flex items-start justify-between">
//         <SessionCardTitle
//           title="Avg credit score distribution"
//           description="Distribution of borrowers’ credit scores"
//         />

//         <OverviewButton>
//           <div className="flex items-center">
//             This week
//             <span className="ml-2.5 text-paraGray/70">
//               <svg
//                 width="12"
//                 height="13"
//                 viewBox="0 0 12 13"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M9.96004 4.97461L6.70004 8.23461C6.31504 8.61961 5.68504 8.61961 5.30004 8.23461L2.04004 4.97461"
//                   stroke="#718096"
//                   stroke-width="1.5"
//                   stroke-miterlimit="10"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </span>
//           </div>
//         </OverviewButton>
//       </div>

//       <div className="">
//         <BarChart
//           width={650}
//           height={400}
//           borderRadius={20}
//           margin={{ left: 70 }}
//           grid={{ horizontal: true }}
//           slotProps={{ legend: { hidden: true }, bar: { radius: 20 } }}
//           series={roundedBarData}
//           yAxis={[
//             {
//               disableLine: true,
//               disableTicks: true,
//               valueFormatter: (value) =>
//                 value > 1000
//                   ? `${(value / 1000).toLocaleString("en-NG", { maximumFractionDigits: 2 })}K`
//                   : value,
//             },
//           ]}
//           xAxis={[
//             {
//               data: xLabels,
//               scaleType: "band",
//               categoryGapRatio: 0.7,
//               disableLine: true,
//               disableTicks: true,
//             },
//           ]}
//           sx={{
//             [`& .rect`]: {
//               // fill: "red",
//               // fontSize: 14,
//               // fontWeight: 500,
//               // fontFamily: "Poppins",
//               // borderColor: "red",
//               // backGroundColor: "#FF0000",
//               borderBottomRightRadius: 20,
//             },
//           }}
//         />
//       </div>

//       {/* <div>
//         <SparkLineChart
//           plotType="bar"
//           data={[1, 4, 2, 5, 7, 2, 4, 6]}
//           height={100}
//           showHighlight={true}
//           showTooltip={true}
//         />
//       </div> */}
//     </>
//   );
// };
