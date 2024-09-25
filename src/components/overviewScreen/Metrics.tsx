import { SessionCardTitle } from "@components/applicationSession/SessionCardTypography";
import Card from "@components/global/Card";
import { SparkLine } from "./SparkLine";
import { useState } from "react";
import NewDropDown from "@components/global/NewDropDown";
import { timeFilterOptions } from "@utils/data";
import AvgScoreBarChart from "./AvgScoreBarChart";
import ApplicationsPieChart from "./ApplicationPieChart";

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

