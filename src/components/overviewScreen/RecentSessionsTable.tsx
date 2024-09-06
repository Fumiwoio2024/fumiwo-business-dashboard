import { OverviewButton } from "@components/global/Buttons";
import Card from "@components/global/Card";
import Tables from "@components/global/Tables";
import { H3 } from "@components/global/Typography";
import { useQClients } from "@hooks/api/queries/client.queries";
import { createColumnHelper } from "@tanstack/react-table";
import { TClient } from "@type/global.types";
import moment from "moment";

const RecentSessionsTable = () => {
  const columnHelper = createColumnHelper<TClient>();
  const { result, isLoading } = useQClients({});

  const columns = [
    columnHelper.accessor("clientId", {
      header: "Ext ref id",
    }),
    columnHelper.accessor("phones", {
      header: "No. of applications",
      cell: (info) => info.getValue().length || 0,
    }),
    columnHelper.accessor("lastModifiedAt", {
      header: "Last application date",
      cell: (info) =>
        info.getValue()
          ? moment(new Date(info.getValue())).format("MMM DD, YYYY - hh:mm A")
          : "",
    }),
    columnHelper.accessor("digitalCreditInfoHistory", {
      header: "Credit score evolution",
      cell: (info) => (info.getValue().length > 0 ? "stable" : "N/A"),
    }),
    columnHelper.accessor("digitalCreditInfoHistory", {
      header: "Current credit score",
      cell: () => "N/A",
    }),

    // columnHelper.accessor(() => "action", {
    //   header: "Action",
    //   cell: (info) => {
    //     return (
    //       <TableOptions
    //         options={[
    //           {
    //             title: "View More",
    //             action: () =>
    //               navigate(`/dashboard/clients/${info.row.original.clientId}`),
    //           },
    //           // {
    //           //   title: "Make Payment",
    //           //   action: () => {},
    //           // },
    //         ]}
    //       />
    //     );
    //   },
    // }),
  ];
  return (
    <Card className="space-y-8">
      <section className="flex items-center justify-between">
        <H3>Recent</H3>
        <OverviewButton
        // disabled={result?.length === 0}
        // className="rounded-lg border-2 border-sidebarBorder px-3 py-2 text-sm text-paraGray"
        >
          See All
        </OverviewButton>
      </section>
      <section>
        <div className="">
          <Tables columns={columns} data={result || []} loading={isLoading} />
        </div>
      </section>
    </Card>
  );
};

export default RecentSessionsTable;
