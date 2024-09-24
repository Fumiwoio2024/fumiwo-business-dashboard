import { useQSingleClient } from "@/hooks/api/queries/client.queries";
import Card from "@components/global/Card";
import Input from "@components/global/Input";
import Tables from "@components/global/Tables";
import { createColumnHelper } from "@tanstack/react-table";
import { TClient } from "@type/global.types";

// import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "@components/global/BreadCrumb";
import { H4 } from "@components/global/Typography";
import Badge from "@components/global/Badge";
import { LineGradient } from "@components/applicationSession/LineGradient";
import SummaryCards from "@components/overviewScreen/SummaryCards";
import { capitalize } from "@mui/material";

// const SingleClient = ({
//   title,
//   value,
//   percentage,
//   // dateString,
//   Icon,
// }: {
//   title: string;
//   value: string;
//   percentage: number;
//   dateString: string;
//   Icon: ReactNode;
// }) => {
//   let color = "";
//   switch (Math.sign(percentage)) {
//     case -1:
//       color = "text-red-500";
//       break;
//     case 1:
//       color = "text-green-500";
//       break;

//     default:
//       color = "";
//       break;
//   }
//   return (
//     <Card className="col-span-1 flex h-[144px] flex-col justify-between">
//       <div className="flex justify-between">
//         <div className="space-y-1">
//           <h4 className="text-semiNormal font-normal text-graySubtext">
//             {title}
//           </h4>
//           <p className="text-xl font-medium">{value}</p>
//         </div>
//         {Icon}
//       </div>
//       <p className="text-xs text-graySubtext">
//         <span className={color}>
//           {/* {Math.sign(percentage) === 1 && "+"}
//           {percentage}% */}
//         </span>{" "}
//         {/*  from {dateString} */}
//       </p>
//     </Card>
//   );
// };

const ClientHome = () => {
  const columnHelper = createColumnHelper<TClient["phones"][0]>();
  const params = useParams();
  const { result, isLoading } = useQSingleClient(params?.clientId);

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
    columnHelper.accessor("digitalCreditInfo.creditScore", {
      header: "Credit score",
      // cell: () => "N/A",
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
    columnHelper.accessor("digitalCreditInfo.recommendation", {
      header: "Recommendation",
      cell: (info) => {
        // const status = info.getValue();
        let type: "success" | "error" = "success";
        switch (info.getValue()) {
          case "paid":
            type = "success";
            break;

          default:
            type = "error";
            break;
        }
        return (
          <Badge type={type}>
            {capitalize(info.getValue().replace("_", " "))}
          </Badge>
        );
      },
    }),
  ];

  return (
    <div className="w-full space-y-8 p-8">
      <BreadCrumb />

      <SummaryCards />
      <Card>
        <LineGradient data={result} />
      </Card>
      <section className="flex items-center justify-between">
        <H4>Devices used</H4>
        <div className="w-72">
          <Input isSearch placeholder="Search applications" />
        </div>
      </section>
      <section>
        <div className="">
          <Tables
            isNavigateRow
            columns={columns}
            data={result?.phones || []}
            loading={isLoading}
          />
        </div>
      </section>
    </div>
  );
};

export default ClientHome;
