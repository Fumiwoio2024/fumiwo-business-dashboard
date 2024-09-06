import { SessionCardTitle } from "@components/applicationSession/SessionCardTypography";
import { OverviewButton } from "@components/global/Buttons";
import Card from "@components/global/Card";
import { BarChart, PieChart } from "@mui/x-charts";

const uData = [40000, 30000, 20000, 27800, 18900, 23900, 34900];
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

const Metrics = () => {
  return (
    <section className="grid grid-cols-5 gap-7">
      <Card className="col-span-3 space-y-8">
        <div className="flex justify-between">
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
            series={[
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
            ]}
            xAxis={[{ data: xLabels, scaleType: "band" }]}
            margin={{ left: 70 }}
          />
        </div>
      </Card>

      <Card className="col-span-2">
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

        <div>
          <PieChart
            height={400}
            margin={{ right: 120 }}
            series={[
              {
                data: [
                  { id: 1, value: 10, label: "Pending", color: "#FCBE2D" },
                  { id: 2, value: 20, label: "Rejected", color: "#FF0000" },
                  { id: 0, value: 70, label: "Approved", color: "#0BE781" },
                ],
                innerRadius: 60,

                arcLabel: (params) =>
                  params.value ? String(params.value) + "%" : "",
                arcLabelMinAngle: 20,
                // valueFormatter,
              },
            ]}
            // skipAnimation={skipAnimation}
          />
        </div>
      </Card>
    </section>
  );
};

export default Metrics;
