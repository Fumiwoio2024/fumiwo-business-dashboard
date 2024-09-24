import Card from "@components/global/Card";
import {
  SessionCardItemName,
  SessionCardItemValue,
  SessionCardTitle,
} from "./SessionCardTypography";
import { TClient } from "@type/global.types";
import { useParams } from "react-router-dom";
import { checkRecommendType } from "@/helpers/functions/checkRecommendedType";
import { formatDays } from "@/helpers/functions/formatDays";

const GeneralInformation = ({
  clientData,
  recommendation,
  age,
}: {
  clientData: TClient["phones"][0]["analyzedData"]["deviceInfo"] | undefined;
  recommendation: string | undefined;
  age: number | undefined;
}) => {
  const params = useParams();

  const data = {
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
    "Device Age": `${age ? formatDays(age) : null} `,
  };
  return (
    <Card className="space-y-8">
      <SessionCardTitle
        title="General Information"
        description="Basic information of the borrower’s device"
      />
      <div className="space-y-4">
        <div className="flex justify-between">
          <SessionCardItemName name={"Recommendation"} />
          <p
            className="font-semibold capitalize"
            style={{
              color:
                recommendation &&
                checkRecommendType(
                  recommendation,
                  "#FCBE2D",
                  "#FF0000",
                  "#0BE781",
                ),
            }}
          >
            {recommendation}
          </p>
        </div>
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
