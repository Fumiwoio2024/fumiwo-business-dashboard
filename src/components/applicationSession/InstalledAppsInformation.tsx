import Card from "@components/global/Card";
import {
  SessionCardItemName,
  SessionCardItemValue,
  SessionCardTitle,
} from "./SessionCardTypography";
import { TClient } from "@type/global.types";
import { useState } from "react";
import moment from "moment";

const slicedIndex = 7;
const InstalledAppsInformation = ({
  appData,
}: {
  appData: TClient["phones"][0]["analyzedData"]["appsInfo"] | undefined;
}) => {
  const [showAll, setShowAll] = useState(false);
  const allInstalledApps = appData
    ? [...appData.userApps, ...appData.unidentifiedUserApps]
    : [];

  return (
    <Card className="space-y-8 transition">
      <SessionCardTitle
        title="Installed apps & date"
        description="Installed apps and date of installation"
      />
      <div className="space-y-4">
        {appData &&
          allInstalledApps
            .slice(0, slicedIndex)
            .map(({ name, firstInstallTime }) => (
              <div key={name} className="flex justify-between">
                <SessionCardItemName name={name} />
                <SessionCardItemValue
                  value={moment(new Date(firstInstallTime)).format("DD/MM/YY")}
                />
              </div>
            ))}
      </div>

      {allInstalledApps.length - slicedIndex > 0 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full border-t pt-2 text-sm text-paraGray/70"
        >
          + {allInstalledApps.length - slicedIndex} others
        </button>
      )}
    </Card>
  );
};

export default InstalledAppsInformation;
