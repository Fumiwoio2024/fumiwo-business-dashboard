import {
  useQAllPhone,
  useQSingleClient,
} from "@/hooks/api/queries/client.queries";
import Card, { SummaryCard } from "@components/global/Card";
import Tables from "@components/global/Tables";
import { createColumnHelper } from "@tanstack/react-table";
import { TClient } from "@type/global.types";

// import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "@components/global/BreadCrumb";
import { H4 } from "@components/global/Typography";
import Badge from "@components/global/Badge";
import { LineGradient } from "@components/applicationSession/LineGradient";
import { capitalize } from "@mui/material";
import { getRecommendedColor } from "@helpers/functions/formatRecommendation";
import moment from "moment";
import { useMemo } from "react";

const SingleClient = () => {
  const columnHelper = createColumnHelper<TClient["phones"][0]>();
  const params = useParams();
  const { result, isLoading } = useQSingleClient(params?.clientId);
  const { result: allPhones, isLoading: isLoadingPhones } = useQAllPhone({
    clientId: params?.clientId,
  });

  const pendingText = <p className="italic">pending</p>;

  const columns = [
    columnHelper.accessor("id", {
      header: "Application ID",
    }),
    columnHelper.accessor("analyzedData.deviceInfo.manufacturer", {
      header: "Device",
      cell: (info) =>
        info.row.original.phoneAnalysisStatus === "in_progress"
          ? pendingText
          : info.getValue(),
    }),
    columnHelper.accessor("analyzedData.ipInfo.countryName", {
      header: "Location",
      cell: (info) => {
        const country = info.getValue(),
          city = info.row.original.analyzedData?.ipInfo.city;
        return info.row.original.phoneAnalysisStatus === "in_progress"
          ? pendingText
          : country
            ? `${city ? `${city},` : ""} ${country}`
            : "N/A";
      },
    }),
    columnHelper.accessor("createdAt", {
      header: "Date of Application",
      cell: (info) =>
        info.getValue()
          ? moment(new Date(info.getValue())).format("MMM DD, YYYY - hh:mm A")
          : "",
    }),
    columnHelper.accessor("digitalCreditInfo.creditScore", {
      header: "Credit score",
      cell: (info) =>
        info.row.original.phoneAnalysisStatus === "in_progress"
          ? pendingText
          : info.getValue(),
    }),

    columnHelper.accessor("digitalCreditInfo.recommendation", {
      header: "Recommendation",
      cell: (info) => {
        return info.row.original.phoneAnalysisStatus === "in_progress" ? (
          <Badge color={"#718096"}>Pending</Badge>
        ) : (
          <Badge color={getRecommendedColor(info.getValue())}>
            {info.getValue() && capitalize(info.getValue()?.replace("_", " "))}
          </Badge>
        );
      },
    }),
  ];

  const phones = useMemo(
    () =>
      allPhones?.map((item) => ({
        ...item,
        analyzedData:
          item.analyzedData &&
          (JSON.parse(
            item.analyzedData as unknown as string,
          ) as TClient["phones"][0]["analyzedData"]),
      })) as TClient["phones"],
    [allPhones],
  );
  console.log(phones);

  return (
    <div className="w-full space-y-8 p-8">
      <BreadCrumb />

      <section className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          Icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 10.25H16"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 13.75H14"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          isLoading={isLoading}
          title="Total number of appl"
          value={result?.datasetsCountAllFromIp ?? "N/A"}
        />
        <SummaryCard
          Icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2V5"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 2V5"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 9.08984H20.5"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.6937 13.6992H15.7027"
                stroke="#0067FB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.6937 16.6992H15.7027"
                stroke="#0067FB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9945 13.6992H12.0035"
                stroke="#0067FB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9945 16.6992H12.0035"
                stroke="#0067FB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.29529 13.6992H8.30427"
                stroke="#0067FB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.29529 16.6992H8.30427"
                stroke="#0067FB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          isLoading={isLoading}
          title="First appl date"
          value={
            moment(result?.digitalCreditInfoHistory[0].lastModifiedAt).format(
              "DD.MM.YY",
            ) ?? "N/A"
          }
        />
        <SummaryCard
          Icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 4V2"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4V2"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 4V2"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 8H22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12H22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 16H22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 20V22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0098 20V22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 20V22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8H4"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12H4"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 16H4"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          isLoading={isLoading}
          title="Previous credit score"
          value={
            result?.digitalCreditInfoHistory[
              result?.digitalCreditInfoHistory.length > 2
                ? result?.digitalCreditInfoHistory.length - 2
                : 0
            ]?.creditScore ?? "N/A"
          }
        />
        <SummaryCard
          Icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 4V2"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4V2"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 4V2"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 8H22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12H22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 16H22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 20V22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0098 20V22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 20V22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8H4"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12H4"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 16H4"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          isLoading={isLoading}
          title="Latest credit score"
          value={result?.latestDigitalCreditInfo.creditScore ?? "N/A"}
        />
      </section>
      <Card>
        <LineGradient data={result} />
      </Card>
      <section className="flex items-center justify-between">
        <H4>Devices used</H4>
      </section>
      <section>
        <div className="">
          <Tables
            isNavigateRow
            columns={columns}
            loading={isLoadingPhones}
            data={phones || []}
          />
        </div>
      </section>
    </div>
  );
};

export default SingleClient;
