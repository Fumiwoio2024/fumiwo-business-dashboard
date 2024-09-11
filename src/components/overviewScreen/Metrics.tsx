import { SessionCardTitle } from "@components/applicationSession/SessionCardTypography";
import { OverviewButton } from "@components/global/Buttons";
import Card from "@components/global/Card";
import { gridClasses } from "@mui/material/Grid";
import {
  BarChart,
  pieArcLabelClasses,
  PieChart,
  SparkLineChart,
} from "@mui/x-charts";

const uData = [40000, 30000, 20000, 278, 18900, 23900, 34900];
const pData = [24000, 13980, 98000, 39080, 48000, 38000, 43000];
const xLabels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const pieData = [
  { id: 1, value: 10, label: "Pending", color: "#FCBE2D" },
  { id: 2, value: 20, label: "Rejected", color: "#FF0000" },
  { id: 0, value: 70, label: "Approved", color: "#0BE781" },
];

const barData = [
  {
    data: pData,
    label: "Very Poor",
    id: "vPoor",
    stack: "total",
    color: "#E70033",
  },
  {
    data: uData,
    label: "Poor",
    id: "poor",
    stack: "total",
    color: "#FF7643",
  },
  {
    data: pData,
    label: "Fair",
    id: "fair",
    stack: "total",
    color: "#F6F002",
  },
  {
    data: uData,
    label: "Good",
    id: "good",
    stack: "total",
    color: "#7ED957",
  },
  {
    data: pData,
    label: "Excellent",
    id: "excellent",
    stack: "total",
    color: "#2B8F3C",
  },
];

const roundedBarData = [
  {
    data: pData,
    // label: "Very Poor",
    // id: "vPoor",
    // stack: "total",
    color: "#011D7B",
  },
];

const AvgScoreBarChart = () => {
  return (
    <>
      <div className="flex items-start justify-between">
        <SessionCardTitle
          title="Avg credit score distribution"
          description="Distribution of borrowers’ credit scores"
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

      <div>
        <BarChart
          width={650}
          height={400}
          margin={{ left: 70 }}
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
              data: xLabels,
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

        <div className="flex justify-center gap-3">
          {barData.map((item) => (
            <div className="flex items-center gap-1.5 text-xxs">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const AvgScoreDistributionBarChart = () => {
  return (
    <>
      <div className="flex items-start justify-between">
        <SessionCardTitle
          title="Avg credit score distribution"
          description="Distribution of borrowers’ credit scores"
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

      <div className="">
        <BarChart
          width={650}
          height={400}
          borderRadius={20}
          margin={{ left: 70 }}
          grid={{ horizontal: true }}
          slotProps={{ legend: { hidden: true }, bar: { radius: 20 } }}
          series={roundedBarData}
          yAxis={[
            {
              disableLine: true,
              disableTicks: true,
              valueFormatter: (value) =>
                value > 1000
                  ? `${(value / 1000).toLocaleString("en-NG", { maximumFractionDigits: 2 })}K`
                  : value,
            },
          ]}
          xAxis={[
            {
              data: xLabels,
              scaleType: "band",
              categoryGapRatio: 0.7,
              disableLine: true,
              disableTicks: true,
            },
          ]}
          sx={{
            [`& .rect`]: {
              // fill: "red",
              // fontSize: 14,
              // fontWeight: 500,
              // fontFamily: "Poppins",
              // borderColor: "red",
              // backGroundColor: "#FF0000",
              borderBottomRightRadius: 20,
            },
          }}
        />
      </div>

      <div>
        <SparkLineChart
          plotType="bar"
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          height={100}
          showHighlight={true}
          showTooltip={true}
        />
      </div>
    </>
  );
};

const ApplicationsPieChart = () => {
  return (
    <>
      {" "}
      <div className="flex justify-between">
        <SessionCardTitle
          title="Applications"
          description="Credit decisions overview"
        />
        <OverviewButton
        // disabled={result?.length === 0}
        // className="rounded-lg border-2 border-sidebarBorder px-3 py-2 text-sm text-paraGray"
        >
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
      <div className="flex flex-1 flex-col items-center justify-center">
        <div>
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
            ></PieChart>
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F8FC]" />
          </div>
          <div className="mt-8 flex justify-between">
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

const Metrics = () => {
  return (
    <section className="grid grid-cols-3 gap-7">
      <Card className="col-span-2">
        {/* <AvgScoreBarChart /> */}
        <AvgScoreDistributionBarChart />
      </Card>

      <Card className="flex flex-col pb-0">
        <ApplicationsPieChart />
      </Card>
    </section>
  );
};

export default Metrics;
