import AppCategoryInformation from "@components/applicationSession/AppCategoryInformation";
import CreditScoreInformation from "@components/applicationSession/CreditScoreInformation";
import GeneralInformation from "@components/applicationSession/GeneralInformation";
import InstalledAppsInformation from "@components/applicationSession/InstalledAppsInformation";
import Locationinformation from "@components/applicationSession/Locationinformation";
import Permissioninformation from "@components/applicationSession/Permissioninformation";
import BreadCrumb from "@components/global/BreadCrumb";
import ModalContainer from "@components/global/ModalContainer";
import { useQPhone } from "@hooks/api/queries/client.queries";
import { TClient } from "@type/global.types";
import moment from "moment";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ApplicationSession = () => {
  const [openAppsModal, setOpenAppsModal] = useState(false);

  const params = useParams();
  const { result } = useQPhone(params?.clientId, params?.phoneId);

  const analyzedData = result?.analyzedData;

  if (!analyzedData?.appsInfo) return <></>;

  return (
    <>
      <ModalContainer
        isVisible={openAppsModal}
        onClose={() => setOpenAppsModal(false)}
        title="Installed apps & date"
      >
        <AllAppsModal appData={analyzedData?.appsInfo} />
      </ModalContainer>
      <div className="w-full space-y-8 p-8">
        <div className="flex justify-between">
          <BreadCrumb />
          <p className="text-sm text-paraGray/80">
            {result?.createdAt &&
              `Date assessed: ${moment(new Date(result?.dataCollectedAt)).format("MMM DD, YYYY")}`}
          </p>
        </div>

        {/* <div className="grid grid-cols-3 "> */}

        <div className="flex items-start gap-5">
          <div className="col-span-2 grid flex-1 grid-cols-2 gap-5">
            <GeneralInformation
              clientData={analyzedData?.deviceInfo}
              age={
                analyzedData?.appsInfo.metadata
                  .deviceAgeSinceFirstAppInstallByUser
              }
              recommendation={result?.digitalCreditInfo.recommendation}
            />
            <CreditScoreInformation
              creditScoreData={result?.digitalCreditInfo}
            />
            <Locationinformation
              ipData={analyzedData?.ipInfo}
              gpsData={analyzedData?.deviceInfo}
            />
            <AppCategoryInformation
              appCategoryData={analyzedData?.appsInfo.userAppsPerCategory}
              allAppLength={analyzedData?.appsInfo.userApps.length}
            />
          </div>
          <div className="w-[293px] space-y-5">
            <Permissioninformation permissionData={result?.permissions} />
            <InstalledAppsInformation
              openAppsModal={() => setOpenAppsModal(true)}
              appData={analyzedData?.appsInfo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationSession;

const AllAppsModal = ({
  appData,
}: {
  appData: TClient["phones"][0]["analyzedData"]["appsInfo"] | undefined;
}) => {
  const allInstalledApps = appData
    ? [...appData.userApps, ...appData.unidentifiedUserApps]
    : [];

  return (
    <div className="grid min-w-[719px] grid-cols-2 justify-between gap-x-20 gap-y-6 text-sm text-paraGray/80">
      {allInstalledApps?.map((item) => (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>
              <ImageWithFallback
                src={item.icon || "https://i.sstatic.net/3hRmg.png"}
                alt={`${item.name} app icon`}
              />
            </span>
            <span>{item.name}</span>
          </div>
          <p className="italic">
            {moment(item.firstInstallTime).format("DD/MM/YYYY")}
          </p>
        </div>
      ))}
    </div>
  );
};

const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
  const [failed, setFailed] = useState(false);

  return failed ? (
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
  ) : (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)} // Set fallback on error
      className="h-5 w-5"
      // loading="lazy"
    />
  );
}; 