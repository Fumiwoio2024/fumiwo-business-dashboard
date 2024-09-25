import AppCategoryInformation from "@components/applicationSession/AppCategoryInformation";
import CreditScoreInformation from "@components/applicationSession/CreditScoreInformation";
import GeneralInformation from "@components/applicationSession/GeneralInformation";
import InstalledAppsInformation from "@components/applicationSession/InstalledAppsInformation";
import Locationinformation from "@components/applicationSession/Locationinformation";
import Permissioninformation from "@components/applicationSession/Permissioninformation";
import BreadCrumb from "@components/global/BreadCrumb";
import ModalContainer from "@components/global/ModalContainer";
import { useQSingleClient } from "@hooks/api/queries/client.queries";
import { TClient } from "@type/global.types";
import moment from "moment";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AllAppsModal = ({
  appData,
}: {
  appData: TClient["phones"][0]["analyzedData"]["appsInfo"] | undefined;
}) => {
  const allInstalledApps = appData
    ? [...appData.userApps, ...appData.unidentifiedUserApps]
    : [];

  return (
    <div className="py- grid h-[70vh] min-w-[719px] grid-cols-2 justify-between gap-x-20 gap-y-6 overflow-y-auto text-sm text-paraGray/80">
      {allInstalledApps?.map((item) => (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>
              <img
                src={item.icon || "https://i.sstatic.net/3hRmg.png"}
                alt="app icon"
                className="h-5 w-5"
              />
            </span>
            <span>{item.name}</span>
          </div>
          <p className="italic">
            {moment(item.firstInstallTime).format("DD/mm/yy")}
          </p>
        </div>
      ))}
    </div>
  );
};

const ApplicationSession = () => {
  const [openAppsModal, setOpenAppsModal] = useState(false);

  const params = useParams();
  const { result: client } = useQSingleClient(params?.clientId);
  const result = client?.phones.find((phone) => phone.id === params?.sessionId);

  return (
    <>
      <ModalContainer
        isVisible={openAppsModal}
        onClose={() => setOpenAppsModal(false)}
        title="Installed apps & date"
      >
        <AllAppsModal appData={result?.analyzedData.appsInfo} />
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
        <div className="flex gap-5">
          <div className="col-span-2 grid flex-1 grid-cols-2 gap-5">
            <GeneralInformation
              clientData={result?.analyzedData.deviceInfo}
              age={
                result?.analyzedData.appsInfo.metadata
                  .deviceAgeSinceFirstAppInstallByUser
              }
              recommendation={result?.digitalCreditInfo.recommendation}
            />
            <CreditScoreInformation
              creditScoreData={result?.digitalCreditInfo}
            />
            <Locationinformation
              ipData={result?.analyzedData?.ipInfo}
              gpsData={result?.analyzedData?.deviceInfo}
            />
            <AppCategoryInformation
              appCategoryData={
                result?.analyzedData.appsInfo.userAppsPerCategory
              }
              allAppLength={result?.analyzedData.appsInfo.userApps.length}
            />
          </div>
          {/* <div className="col-span-1 grid gap-5"> */}
          <div className="w-[293px] space-y-5">
            <Permissioninformation permissionData={result?.permissions} />
            <InstalledAppsInformation
              openAppsModal={() => setOpenAppsModal(true)}
              appData={result?.analyzedData.appsInfo}
            />
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ApplicationSession;
