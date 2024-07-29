import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// import { Pagination } from "./elements";

const Tables = (
  { columns, data, currentPage, setCurrentPage, totalPage, isPaginated },
  // : {
  //   columns: number;
  //   data: any;
  //   currentPage: number;
  //   setCurrentPage: (page: number) => void;
  //   totalPage: number;
  //   isPaginated: boolean;
  // }
) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-black">
          <thead className="bg-neutral">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="w-full">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-dark-1 whitespace-nowrap !px-5 py-3 text-left text-xs font-semibold uppercase"
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
          <tbody className="bg-white">
            {table?.getRowModel().rows.map((row) => (
              <tr key={row.id} className="relative border-b-2 border-[#F5F8FA]">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="whitespace-nowrap !px-5 py-3 text-left text-sm capitalize"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

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
