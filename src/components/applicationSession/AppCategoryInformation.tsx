import Card from "@components/global/Card";
import { SessionCardTitle } from "./SessionCardTypography";
import { TClient } from "@type/global.types";
import { PieChart } from "@mui/x-charts";

const colors = [
  "#A5B3CD",
  "#BB86FC",
  "#002BB4",
  "#006AFF",
  "#62EAE1",
  "#F79408CC",
  "#FF0000",
  "#FF05EE",
  "#009851",
  "#A8CAFF",
  "#F6F002",
  "#00FFD9",
  "#000000",
  "#D2AF5C",
  "#011D7B",
  "#02D1F6",
];

const AppCategoryInformation = ({
  appCategoryData,
  allAppLength,
}: {
  allAppLength: number | undefined;
  appCategoryData:
    | TClient["phones"][0]["analyzedData"]["appsInfo"]["userAppsPerCategory"]
    | undefined;
}) => {
  if (!appCategoryData || !allAppLength) return <></>;
  const categories = Object.keys(appCategoryData);
  const data = categories.map((category, index) => ({
    id: category,
    value: appCategoryData?.[category as keyof typeof appCategoryData].length,
    //  `${appCategoryData?.[category as keyof typeof appCategoryData].length} Apps`,
    // Number(
    //   (
    //     (appCategoryData?.[category as keyof typeof appCategoryData].length /
    //       allAppLength) *
    //     100
    //   ).toFixed(2),
    // ),
    color: colors[index % colors.length],
    label:
      category.charAt(0).toUpperCase() + category.replace(/_/g, " ").slice(1),
  }));

  return (
    <Card className="col-span-2 space-y-8">
      <SessionCardTitle
        title="Application categories"
        description="Categories of installed apps"
      />
      <div className="w- flex items-center justify-center gap-6">
        <div>
          <PieChart
            slotProps={{
              legend: { hidden: true },
            }}
            series={[
              {
                data,
                valueFormatter: ({ value }) =>
                  `${value} Apps - ${((Number(value) / allAppLength) * 100).toFixed(2)}%`,
              },
            ]}
            width={350}
            height={350}
            margin={{ right: 0 }}
            // className="border"
          />
        </div>

        <section className="grid grid-cols-2 gap-x-3 gap-y-2">
          {data.map((item) => {
            return (
              <div className="flex items-center gap-2 text-sm font-normal text-paraGray">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <p>
                  {item.label} - {item.value}
                </p>
              </div>
            );
          })}
        </section>
      </div>

      <h5 className="font-semibold text-paraGray">
        Total apps installed: {allAppLength}
      </h5>
    </Card>
  );
};

export default AppCategoryInformation;
