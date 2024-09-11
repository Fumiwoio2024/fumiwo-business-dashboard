import { useQClients } from "@/hooks/api/queries/client.queries";
import Card from "@components/global/Card";
import Input from "@components/global/Input";
import Tables from "@components/global/Tables";
import { createColumnHelper } from "@tanstack/react-table";
import { TClient } from "@type/global.types";
import moment from "moment";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "@components/global/BreadCrumb";
import { H4 } from "@components/global/Typography";
import Badge from "@components/global/Badge";
import TableOptions from "@components/global/TableOptions";
import { LineGradient } from "@components/applicationSession/LineGradient";

const SingleClient = ({
  title,
  value,
  percentage,
  // dateString,
  Icon,
}: {
  title: string;
  value: string;
  percentage: number;
  dateString: string;
  Icon: ReactNode;
}) => {
  let color = "";
  switch (Math.sign(percentage)) {
    case -1:
      color = "text-red-500";
      break;
    case 1:
      color = "text-green-500";
      break;

    default:
      color = "";
      break;
  }
  return (
    <Card className="col-span-1 flex h-[144px] flex-col justify-between">
      <div className="flex justify-between">
        <div className="space-y-1">
          <h4 className="text-semiNormal font-normal text-graySubtext">
            {title}
          </h4>
          <p className="text-xl font-medium">{value}</p>
        </div>
        {Icon}
      </div>
      <p className="text-xs text-graySubtext">
        <span className={color}>
          {/* {Math.sign(percentage) === 1 && "+"}
          {percentage}% */}
        </span>{" "}
        {/*  from {dateString} */}
      </p>
    </Card>
  );
};

const ClientHome = () => {
  const columnHelper = createColumnHelper<TClient["phones"][0]>();
  const { result: clients } = useQClients({});
  const result = clients?.[0];
  const navigate = useNavigate();

  const columns = [
    columnHelper.accessor("_id", {
      header: "ID No.",
    }),
    columnHelper.accessor("analyzedData.deviceInfo.manufacturer", {
      header: "Device",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("analyzedData.ipInfo.city", {
      header: "Location",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("__v", {
      header: "Credit score",
      cell: () => "N/A",
    }),
    // columnHelper.accessor("amountDue", {
    //   header: "amount",
    //   cell: (info) => "",
    //   // `${info.row.original.productsBilled[0].currency} ${info.getValue()}`,
    // }),
    // columnHelper.accessor("_createdAt", {
    //   header: "Date created",
    //   cell: (info) =>
    //     moment(
    //       new Date(
    //         info
    //           .getValue()
    //           .replace(/(\d{2}:\d{2}:\d{2})\d{2}([+-]\d{2}:\d{2})/, "$1$2"),
    //       ),
    //     ).format("MMM DD, YYYY"),
    // }),
    columnHelper.accessor("sdkVersion", {
      header: "Recommendation",
      cell: () => {
        // const status = info.getValue();
        let type: "success" | "error" = "success";
        switch (status) {
          case "paid":
            type = "success";
            break;

          default:
            type = "error";
            break;
        }
        return <Badge type={type}>{"N/A"}</Badge>;
      },
    }),
    columnHelper.accessor(() => "action", {
      header: "Action",
      cell: (info) => {
        return (
          <TableOptions
            options={[
              {
                title: "View More",
                action: () => navigate(info.row.original.id),
              },
              // {
              //   title: "Make Payment",
              //   action: () => {},
              // },
            ]}
          />
        );
      },
    }),
  ];

  return (
    <div className="w-full space-y-8 p-8">
      <BreadCrumb />

      <section className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <SingleClient
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
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 4V2"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4V2"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 4V2"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 8H22"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12H22"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 16H22"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 20V22"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0098 20V22"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 20V22"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8H4"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12H4"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 16H4"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          dateString="yesterday"
          percentage={0}
          title="Total number of appl"
          value={`${result?.phones.length || 0}`}
        />
        <SingleClient
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
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 4V2"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4V2"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 4V2"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 8H22"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12H22"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 16H22"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 20V22"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0098 20V22"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 20V22"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8H4"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12H4"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 16H4"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          dateString="yesterday"
          percentage={0}
          title="First appl date"
          value={`${result?.createdAt ? moment(new Date(result?.createdAt)).format("DD.MM.YY") : "N/A"}`}
        />
        <SingleClient
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
          dateString="yesterday"
          percentage={0}
          title="Initial credit score"
          value={`${result?.digitalCreditInfoHistory?.[0] || "N/A"}`}
          // value="N/A"
        />
        <SingleClient
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
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 4V2"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4V2"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 4V2"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 8H22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12H22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 16H22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 20V22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0098 20V22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 20V22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8H4"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12H4"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 16H4"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          dateString="yesterday"
          percentage={0}
          title="Last credit score"
          value={`${result?.latestDigitalCreditInfo || "N/A"}`}
        />
      </section>

      <Card>
        <LineGradient />
      </Card>

      <section className="flex items-center justify-between">
        <H4>Devices used</H4>
        <div className="w-72">
          <Input isSearch placeholder="Search applications" />
        </div>
      </section>

      <section>
        <div className="">
          <Tables columns={columns} data={result?.phones || []} />
        </div>
      </section>
    </div>
  );
};

export default ClientHome;
