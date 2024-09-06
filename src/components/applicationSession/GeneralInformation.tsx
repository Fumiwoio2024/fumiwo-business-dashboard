import Card from "@components/global/Card";
import {
  SessionCardItemName,
  SessionCardItemValue,
  SessionCardTitle,
} from "./SessionCardTypography";
import { TClient } from "@type/global.types";
import { useParams } from "react-router-dom";

const GeneralInformation = ({
  clientData,
}: {
  clientData: TClient["phones"][0]["analyzedData"]["deviceInfo"] | undefined;
}) => {
  const params = useParams();

  const data = {
    Status: clientData?.brand && null,
    "Session ID": clientData?.osVersion
      ? params?.sessionId
      : clientData?.osVersion,
    Device: clientData?.device
      ? `${clientData.manufacturer} ${clientData.device}`
      : clientData?.device,
    "Operating system": clientData?.osVersion
      ? "Android"
      : clientData?.osVersion,
    "Android Version": clientData?.osVersion,
    "Device Age": clientData?.androidId,
  };
  return (
    <Card className="space-y-8">
      <SessionCardTitle
        title="General Information"
        description="Basic information of the borrower’s device"
      />
      <div className="space-y-4">
        {data &&
          Object.entries(data)
            .slice(0, 6)
            .map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <SessionCardItemName name={key} />
                <SessionCardItemValue value={value} />
              </div>
            ))}
      </div>
    </Card>
  );
};

export default GeneralInformation;
