import { dummyTeamMembers } from "@/utils/data";
import Tables from "@components/global/Tables";
import { createColumnHelper } from "@tanstack/react-table";
import { TUser } from "@type/global.types";
import moment from "moment";

const AuditLogs = () => {
  const columnHelper = createColumnHelper<TUser>();

  const columns = [
    columnHelper.accessor("lastModifiedAt", {
      header: "Date",
      cell: (info) =>
        `${moment(new Date(info.getValue())).format("MMM DD, YYYY - hh:mm A")}`,
    }),

    columnHelper.accessor("firstName", {
      header: "Activity",
      cell: (info) => (
        <div className="gap-5">
          <span className="text-sm font-bold text-paraGray/80">
            {info.getValue()
              ? `${info.getValue()}`
              : info.row.original.business?.name.split(" ")[0]}
          </span>
          <span> just added a new admin </span>
        </div>
      ),
    }),

    columnHelper.accessor("lastModifiedAt", {
      header: "Activity",
      cell: () => (
        <div className="gap-5 text-secondaryButton underline hover:no-underline">
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

        <div className="">
          <Tables
            columns={columns}
            data={dummyTeamMembers as unknown as TUser[]}
          />
        </div>
      </div>
    </>
  );
};

export default AuditLogs;
