import Tables from "@components/global/Tables";
import { H3 } from "@components/global/Typography";
import { useQAuditLogs } from "@hooks/api/queries/auditLogs.queries";
import useClickOutside from "@hooks/custom/useClickOutside";
import { createColumnHelper } from "@tanstack/react-table";
import { TAuditLog } from "@type/global.types";
import moment from "moment";
import { ReactNode, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const SingleActivityItem = ({
  title,
  description,
}: {
  title: string;
  description: string | ReactNode;
}) => {
  return (
    <div className="space-y-1.5 text-sm text-paraGray/80">
      <p className="">{title}</p>
      <p className="font-semibold"> {description}</p>
    </div>
  );
};

const AuditLogs = () => {
  const { result, isLoading } = useQAuditLogs();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedLog, setSelectedLog] = useState<TAuditLog | null>(null);

  // const navigate = useNavigate();
  const columnHelper = createColumnHelper<TAuditLog>();
  const ref = useClickOutside(setOpenSideBar);

  const columns = [
    columnHelper.accessor("lastModifiedAt", {
      header: "Date",
      cell: (info) =>
        `${moment(new Date(info.getValue())).format("MMM DD, YYYY - hh:mm A")}`,
    }),

    columnHelper.accessor("activity", {
      header: "Activity",
      cell: (info) => {
        const name = info.row.original.entity.name;
        return (
          <div className="gap-5">
            <span className="text-sm font-bold text-paraGray/80">{name}</span>
            <span> {info.getValue().replace(name, "")}</span>
          </div>
        );
      },
    }),

    columnHelper.accessor("lastModifiedAt", {
      header: "Action",
      cell: (info) => (
        <div
          onClick={() => {
            setOpenSideBar(true);
            setSelectedLog(info.row.original);
          }}
          className="gap-5 text-secondaryButton underline hover:no-underline"
        >
          View details
        </div>
      ),
    }),
  ];

  return (
    <>
      <div className="w-full space-y-8 p-8">
        <button className="flex items-center gap-1 text-paraGray/70">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.3999 2.10156H18.5999C19.6999 2.10156 20.5999 3.00156 20.5999 4.10156V6.30156C20.5999 7.10156 20.0999 8.10156 19.5999 8.60156L15.2999 12.4016C14.6999 12.9016 14.2999 13.9016 14.2999 14.7016V19.0016C14.2999 19.6016 13.8999 20.4016 13.3999 20.7016L11.9999 21.6016C10.6999 22.4016 8.8999 21.5016 8.8999 19.9016V14.6016C8.8999 13.9016 8.4999 13.0016 8.0999 12.5016L4.2999 8.50156C3.7999 8.00156 3.3999 7.10156 3.3999 6.50156V4.20156C3.3999 3.00156 4.2999 2.10156 5.3999 2.10156Z"
              stroke="#718096"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.93 2.10156L6 10.0016"
              stroke="#718096"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Filter</p>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4498 6.09375L8.3748 10.1688C7.89355 10.65 7.10605 10.65 6.6248 10.1688L2.5498 6.09375"
              stroke="#718096"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div className="relative flex overflow-x-hidden">
          <Tables
            // @ts-expect-error: columnHelper is not assignable to type 'ColumnHelper<TClient>'
            columns={columns}
            data={result?.slice(0, 12) || []}
            loading={isLoading}
          />

          <div
            ref={ref}
            className={`border- absolute right-0 min-h-[700px] w-[450px] border bg-white transition duration-300 ${openSideBar ? "translate-x-0" : "translate-x-[500px]"}`}
          >
            <div className="space-y-6 px-6 py-3.5">
              <H3 className="text-sm">About this activity</H3>

              {selectedLog && (
                <div className="grid grid-cols-2 justify-between gap-y-8 pr-10">
                  <SingleActivityItem
                    title="User"
                    description={selectedLog.entity.name}
                  />
                  <SingleActivityItem
                    title="Email"
                    description={selectedLog.entity.email}
                  />

                  <SingleActivityItem
                    title="Event"
                    description={selectedLog.event}
                  />
                  <SingleActivityItem
                    title="Resource"
                    description={selectedLog.resource}
                  />
                  <SingleActivityItem
                    title="IP address"
                    description={selectedLog.ipAddress}
                  />
                  <SingleActivityItem
                    title="Device info"
                    description={`${selectedLog.deviceInfo.browser} (v${selectedLog.deviceInfo.version})`}
                  />
                  <SingleActivityItem
                    title="Date"
                    description={moment(
                      new Date(selectedLog.lastModifiedAt),
                    ).format("MMM DD, YYYY hh:mmA")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditLogs;
