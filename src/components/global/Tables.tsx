import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { H4 } from "./Typography";
// import { ReactNode } from "react";

// import { Pagination } from "./elements";

type TTableProps<T> = {
  //  eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  data: T[];
  loading?: boolean;
} & (
  | {
      currentPage: number;
      setCurrentPage: (value: number) => void;
      totalPage: number;
      isPaginated: boolean;
    }
  | {
      currentPage?: never;
      setCurrentPage?: never;
      totalPage?: never;
      isPaginated?: never;
    }
);

const Tables = <T,>({
  columns,
  data,
  // currentPage,
  // setCurrentPage,
  // totalPage,
  // isPaginated,
}: TTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="mb-40 w-full text-black">
          <thead className="bg-tableHeader">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="w-full">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-dark-1 whitespace-nowrap !px-5 py-3 text-left text-xs font-semibold"
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
              {table?.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="relative border-b-2 border-[#F5F8FA]"
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
              ))}
            </tbody>
          )}
        </table>

        {!(data.length > 0) && (
          <div className="flex w-full items-center justify-center">
            <H4>No information to show</H4>
          </div>
        )}

        {/* pagination
        {isPaginated && (
          <div className="w-full bg-white px-6 pb-6 pt-8">
            <Pagination
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Tables;
