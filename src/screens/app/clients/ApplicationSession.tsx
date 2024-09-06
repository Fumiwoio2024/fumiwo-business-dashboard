import AppCategoryInformation from "@components/applicationSession/AppCategoryInformation";
import CreditScoreInformation from "@components/applicationSession/CreditScoreInformation";
import GeneralInformation from "@components/applicationSession/GeneralInformation";
import InstalledAppsInformation from "@components/applicationSession/InstalledAppsInformation";
import Locationinformation from "@components/applicationSession/Locationinformation";
import Permissioninformation from "@components/applicationSession/Permissioninformation";
import BreadCrumb from "@components/global/BreadCrumb";
import { useQClients } from "@hooks/api/queries/client.queries";
import moment from "moment";

const ApplicationSession = () => {
  const { result: clients } = useQClients({});
  const result = clients?.[0].phones[0];
  console.log(result);

  return (
    <div className="w-full space-y-8 p-8">
      <div className="flex justify-between">
        <BreadCrumb />
        <p className="text-sm text-paraGray/80">
          {result?.createdAt &&
            `Date assessed: ${moment(new Date(result?.dataCollectedAt)).format("MMM DD, YYYY")}`}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 grid grid-cols-2 gap-5">
          <GeneralInformation clientData={result?.analyzedData.deviceInfo} />
          <CreditScoreInformation />
          <Locationinformation
            ipData={result?.analyzedData?.ipInfo}
            gpsData={result?.analyzedData?.deviceInfo}
          />
          <AppCategoryInformation
            appCategoryData={result?.analyzedData.appsInfo.userAppsPerCategory}
            allAppLength={result?.analyzedData.appsInfo.userApps.length}
          />
        </div>
        <div className="col-span-1 grid gap-5">
          <Permissioninformation permissionData={result?.permissions} />
          <InstalledAppsInformation appData={result?.analyzedData.appsInfo} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationSession;
