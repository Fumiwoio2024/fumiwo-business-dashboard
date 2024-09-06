import Card from "@components/global/Card";
import {
  SessionCardItemName,
  SessionCardItemValue,
  SessionCardTitle,
} from "./SessionCardTypography";
import { TClient } from "@type/global.types";

const toLat = (x: number) =>
  `${x.toFixed(2)} °${Math.sign(x) === -1 ? "S" : "N"}`;
const toLong = (x: number) =>
  `${x.toFixed(2)} °${Math.sign(x) === -1 ? "W" : "E"}`;

const Locationinformation = ({
  ipData,
  gpsData,
}: {
  ipData: TClient["phones"][0]["analyzedData"]["ipInfo"] | undefined;
  gpsData: TClient["phones"][0]["analyzedData"]["deviceInfo"] | undefined;
}) => {
  const ipSelectedData = {
    "Public IP Address": ipData?.ip,
    "Country ISO": ipData?.countryCode,
    Country: ipData?.countryName,
    State: ipData?.city,
    VPN: gpsData?.useVpn,
  };

  const gpsSelectedData = {
    Latitude: ipData?.latitude ? toLat(ipData.latitude) : ipData?.latitude,
    Longitude: ipData?.longitude ? toLong(ipData.longitude) : ipData?.longitude,
    "Network Type": gpsData?.wifiEnabled,
    "Network Operator": gpsData?.networkOperatorName,
  };

  return (
    <div className="col-span-2">
      <Card className="flex justify-between gap-5">
        <div className="w-5/12 space-y-8">
          <SessionCardTitle
            title="IP information"
            description="Categories of installed apps"
          />
          <div className="space-y-4">
            {ipSelectedData &&
              Object.entries(ipSelectedData)
                .slice(0, 6)
                .map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <SessionCardItemName name={key} />
                    <SessionCardItemValue value={value} />
                  </div>
                ))}
          </div>
        </div>

        <div className="flex items-center gap-0.5 self-center text-sm font-bold text-secondaryButton">
          <svg
            width="44"
            height="3"
            viewBox="0 0 44 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="1.5"
              x2="43.5"
              y2="1.5"
              stroke="#009851"
              stroke-width="2"
            />
          </svg>
          Match
          <svg
            width="44"
            height="3"
            viewBox="0 0 44 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="1.5"
              x2="43.5"
              y2="1.5"
              stroke="#009851"
              stroke-width="2"
            />
          </svg>
        </div>

        <div className="w-5/12 space-y-8">
          <SessionCardTitle
            title="GPS information"
            description="Categories of installed apps"
          />
          <div className="space-y-4">
            {gpsSelectedData &&
              Object.entries(gpsSelectedData)
                .slice(0, 6)
                .map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <SessionCardItemName name={key} />
                    <SessionCardItemValue value={value} />
                  </div>
                ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Locationinformation;
