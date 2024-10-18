import Card from "@components/global/Card";
import {
  SessionCardItemName,
  SessionCardItemValue,
  SessionCardTitle,
} from "./SessionCardTypography";
import { TClient } from "@type/global.types";
import moment from "moment";

const slicedIndex = 3;
const InstalledAppsInformation = ({
  appData,
  openAppsModal,
}: {
  appData: TClient["phones"][0]["analyzedData"]["appsInfo"] | undefined;
  openAppsModal: () => void;
}) => {
  const allInstalledApps = appData
    ? [...appData.userApps, ...appData.unidentifiedUserApps]
    : [];

  return (
    <>
      <Card className="space-y-8">
        <SessionCardTitle
          title="Installed apps & date"
          description="Installed apps and date of installation"
        />
        <div className="space-y-4">
          {appData &&
            allInstalledApps
              .slice(0, slicedIndex)
              .map(({ name, firstInstallTime, icon }) => (
                <div key={name} className="flex justify-between">
                  <div className="items- flex gap-2">
                    {icon ? (
                      <img
                        src={icon || "https://i.sstatic.net/3hRmg.png"}
                        alt="app icon"
                        className="h-5 w-5"
                      />
                    ) : (
                      <svg
                        width="13"
                        height="17"
                        viewBox="0 0 13 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.57143 16.5H1.14286C0.839753 16.5 0.549062 16.3796 0.334735 16.1653C0.120408 15.9509 0 15.6602 0 15.3571V1.64286C0 1.33975 0.120408 1.04906 0.334735 0.834735C0.549062 0.620408 0.839753 0.5 1.14286 0.5H8.57143V1.64286H1.14286V15.3571H8.57143V10.7857H9.71429V15.3571C9.71429 15.6602 9.59388 15.9509 9.37955 16.1653C9.16522 16.3796 8.87453 16.5 8.57143 16.5Z"
                          fill="#718096"
                        />
                        <path
                          d="M12.25 4.695V2.9925C12.25 2.46375 12.01 2.25 11.4138 2.25H9.89875C9.3025 2.25 9.0625 2.46375 9.0625 2.9925V4.69125C9.0625 5.22375 9.3025 5.43375 9.89875 5.43375H11.4138C12.01 5.4375 12.25 5.22375 12.25 4.695Z"
                          stroke="#718096"
                          stroke-width="0.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.25 8.91375V7.39875C12.25 6.8025 12.01 6.5625 11.4138 6.5625H9.89875C9.3025 6.5625 9.0625 6.8025 9.0625 7.39875V8.91375C9.0625 9.51 9.3025 9.75 9.89875 9.75H11.4138C12.01 9.75 12.25 9.51 12.25 8.91375Z"
                          stroke="#718096"
                          stroke-width="0.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.9375 4.695V2.9925C7.9375 2.46375 7.6975 2.25 7.10125 2.25H5.58625C4.99 2.25 4.75 2.46375 4.75 2.9925V4.69125C4.75 5.22375 4.99 5.43375 5.58625 5.43375H7.10125C7.6975 5.4375 7.9375 5.22375 7.9375 4.695Z"
                          stroke="#718096"
                          stroke-width="0.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.9375 8.91375V7.39875C7.9375 6.8025 7.6975 6.5625 7.10125 6.5625H5.58625C4.99 6.5625 4.75 6.8025 4.75 7.39875V8.91375C4.75 9.51 4.99 9.75 5.58625 9.75H7.10125C7.6975 9.75 7.9375 9.51 7.9375 8.91375Z"
                          stroke="#718096"
                          stroke-width="0.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}

                    <SessionCardItemName name={name} />
                  </div>
                  <SessionCardItemValue
                    value={moment(new Date(firstInstallTime)).format(
                      "DD/MM/YY",
                    )}
                  />
                </div>
              ))}
        </div>

        {allInstalledApps.length - slicedIndex > 0 && (
          <button
            onClick={() => openAppsModal()}
            className="w-full border-t pt-2 text-sm text-paraGray/70"
          >
            <p className="mx-auto w-fit rounded-lg px-2 hover:bg-paraGray/5 active:bg-paraGray/20">
              + {allInstalledApps.length - slicedIndex} others
            </p>
          </button>
        )}
      </Card>
    </>
  );
};

export default InstalledAppsInformation;
