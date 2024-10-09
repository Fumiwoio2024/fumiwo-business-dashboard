import Card from "@components/global/Card";
import { SessionCardTitle } from "./SessionCardTypography";
import { TClient } from "@type/global.types";
import { PieChart } from "@mui/x-charts";

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
  const data = categories.slice(0, 18).map((category) => ({
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
    label:
      category.charAt(0).toUpperCase() + category.replace(/_/g, " ").slice(1),
  }));

  return (
    <Card className="col-span-2 space-y-8">
      <SessionCardTitle
        title="Application categories"
        description="Categories of installed apps"
      />
      <div className="w-fit">
        <PieChart
          series={[
            {
              data,
              valueFormatter: ({ value }) =>
                `${value} Apps - ${((Number(value) / allAppLength) * 100).toFixed(2)}%`,
            },
          ]}
          width={600}
          height={550}
          margin={{ right: 250 }}
        />
      </div>
    </Card>
  );
};

export default AppCategoryInformation;
