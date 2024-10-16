import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { H4 } from "./Typography";
import { useNavigate } from "react-router-dom";
import NewDropDown from "./NewDropDown";

type TTableProps<T> = {
  //  eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  data: T[];
  loading?: boolean;
  isNavigateRow?: boolean;
  routePrefix?: string;
} & (
  | {
      currentPage: number;
      setLimitPerPage: (value: number) => void;
      setCurrentPage: (value: number) => void;
      totalPage: number;
      limitPerPage: number;
      isPaginated: boolean;
    }
  | {
      currentPage?: never;
      setLimitPerPage?: never;
      setCurrentPage?: never;
      totalPage?: never;
      limitPerPage?: never;
      isPaginated?: never;
    }
);

const limitPerPageOptions = [
  { title: "10 rows", id: "10" },
  { title: "20 rows", id: "20" },
  { title: "40 rows", id: "40" },
  { title: "50 rows", id: "50" },
];

const Pagination = ({
  currentPage,
  setCurrentPage,
  setLimitPerPage,
  totalPage,
  limitPerPage,
  // isPaginated,
}: {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  setLimitPerPage: (value: number) => void;
  limitPerPage: number;
  totalPage: number;
  isPaginated: boolean;
}) => {
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div
      className={`flex items-center justify-between gap-2 text-sm text-paraGray`}
    >
      <section>
        <NewDropDown
          dropDownPosition="top"
          options={limitPerPageOptions}
          selectedOption={
            limitPerPageOptions.find(
              (obj) => Number(obj.id) === limitPerPage,
            ) || limitPerPageOptions[0]
          }
          setSelectedOption={(option) => setLimitPerPage(Number(option.id))}
        >
          <div className="space-x-2">
            <span className="inline">
              Showing {limitPerPage * (currentPage - 1) + 1} -{" "}
              {limitPerPage * currentPage} rows
            </span>
            <svg
              className="inline"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1425 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.135C1.5 14.8725 3.1275 16.5 5.8575 16.5H12.135C14.865 16.5 16.4925 14.8725 16.4925 12.1425V5.8575C16.5 3.1275 14.8725 1.5 12.1425 1.5Z"
                fill="#718096"
                fill-opacity="0.25"
              />
              <path
                d="M9.00012 11.1827C8.85762 11.1827 8.71512 11.1302 8.60262 11.0177L5.95512 8.37023C5.73762 8.15273 5.73762 7.79273 5.95512 7.57523C6.17262 7.35773 6.53262 7.35773 6.75012 7.57523L9.00012 9.82523L11.2501 7.57523C11.4676 7.35773 11.8276 7.35773 12.0451 7.57523C12.2626 7.79273 12.2626 8.15273 12.0451 8.37023L9.39762 11.0177C9.28512 11.1302 9.14262 11.1827 9.00012 11.1827Z"
                fill="#18191F"
              />
            </svg>
            <span className="inline">of 33</span>
          </div>
        </NewDropDown>
      </section>

      <section className="flex items-center gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            className="rotate-180"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="24"
              y="24"
              width="24"
              height="24"
              rx="12"
              transform="rotate(-180 24 24)"
              fill="#718096"
              fill-opacity="0.25"
            />
            <path
              d="M10 8L14 12L10 16"
              stroke="#202B3C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Prev
        </button>
        <div>
          {pages
            .slice(Math.max(0, currentPage - 2), currentPage)
            .map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-8 w-8 rounded-full border-2 border-primaryBlue ${
                  currentPage === page
                    ? "bg-primaryBlue text-white"
                    : "bg-white text-primaryBlue"
                }`}
              >
                {page}
              </button>
            ))}
        </div>
        <button
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="24"
              y="24"
              width="24"
              height="24"
              rx="12"
              transform="rotate(-180 24 24)"
              fill="#718096"
              fill-opacity="0.25"
            />
            <path
              d="M10 8L14 12L10 16"
              stroke="#202B3C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </section>
    </div>
  );
};

const Tables = <T extends { id?: string }>({
  columns,
  data,
  loading,
  isNavigateRow,
  routePrefix,
  currentPage,
  setCurrentPage,
  totalPage,
  limitPerPage,
  setLimitPerPage,
  isPaginated,
}: TTableProps<T>) => {
  const navigate = useNavigate();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(), // Enable row expansion model
  });

  return (
    <div className="w-full">
      <div className="h-full overflow-x-auto overflow-y-hidden">
        <table className="mb-10 w-full text-black">
          <thead className="bg-tableHeader">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="w-full">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-dark-1 whitespace-nowrap px-5 py-3 text-left text-xs font-semibold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {data.length > 0 && (
            <tbody className="bg-white">
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr
                    key={row.id}
                    onClick={() =>
                      isNavigateRow &&
                      // @ts-expect-error: phoneAnalysisStatus doesn't exist on type T
                      row.original.phoneAnalysisStatus !== "in_progress" &&
                      navigate(`${routePrefix || ""}${row.original.id}`)
                    }
                    // @ts-expect-error: phoneAnalysisStatus doesn't exist on type T
                    className={`relative border-b-2 border-[#F5F8FA] ${isNavigateRow && row.original.phoneAnalysisStatus !== "in_progress" && "cursor-pointer hover:bg-linkGray/5"}`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-5 py-4 text-sm text-paraGray"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>

        {loading ? (
          <div className="my-20 w-full text-center"> Loading... </div>
        ) : (
          !(data.length > 0) && (
            <div className="my-20 flex w-full items-center justify-center">
              <H4>No information to show</H4>
            </div>
          )
        )}

        {isPaginated && !loading && (
          <div className="pb- w-full px-6">
            <Pagination
              limitPerPage={limitPerPage}
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setLimitPerPage={setLimitPerPage}
              isPaginated
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tables;

