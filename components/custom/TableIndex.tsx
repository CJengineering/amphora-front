"use client";
import { fakeCountries } from "@/app/fake-data/fake-countries";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  Table,
  Row,
} from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import {
  ArrowTrendingUpIcon,
  BeakerIcon,
  ChartBarIcon,
  CircleStackIcon,
  CloudIcon,
  DivideIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { CountryData } from "@/app/interfaces";
import { mapperRawToCalculatedCountries } from "@/app/lib/mappers/mapperRawToCalculatedCountries";

// Color mapper: values 0 to 5, light green to dark orange
const getBgColor = (value: number) => {
  if (value <= 1) return "bg-very-low"; // light green for 0-1
  if (value <= 2) return "bg-low"; // lighter orange for 2
  if (value <= 3) return "bg-medium"; // light orange for 3
  if (value <= 4) return "bg-high"; // darker orange for 4
  return "bg-extreme"; // dark orange for 5
};
const getBgColorPercentage = (value: number): string => {
    if (value < 0.2) return "bg-very-low"; // light blue for values under 0.2 (Very Low)
    if (value < 0.4) return "bg-low"; // light green for values between 0.2 and 0.39 (Low)
    if (value < 0.6) return "bg-medium"; // light yellow for values between 0.4 and 0.59 (Medium)
    if (value < 0.8) return "bg-high"; // light orange for values between 0.6 and 0.79 (High)
    return "bg-extreme"; // red for values 0.8 and above (Extreme)
  };
const getBgColorString = (value: string) => {
  if (value === "Low") return "bg-low"; // light green for 0-1
  if (value === "Medium") return "bg-medium"; // lighter orange for 2
  if (value === "High") return "bg-high"; // light orange for 3
  if (value === "Extreme") return "bg-extreme"; // darker orange for 4
  return "bg-very-low"; // dark orange for 5
};
const createPercent = (value: number) =>{
    const percent = value * 100;
    return `${percent}%`;
};
const columnHelper = createColumnHelper<CountryData>();
const columns = [
  columnHelper.accessor("nation", {
    header: () => <div className="mr-2 uppercase font-mono">Country</div>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("overallScore", {
    header: () => <div className="font-mono uppercase ">OVERALL</div>,
    cell: (info) => <div className={`${getBgColorPercentage(info.getValue())} p-2 `}>{createPercent(info.getValue())}</div>,
  }),
  columnHelper.accessor("jameelIndex", {
    header: () => <div className="font-mono uppercase "> JIS</div>,
    cell: (info) => (
      <div className={`${getBgColorString(info.getValue())} p-2 `}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("foodIm", {
    header: () => (
      <div className="flex font-mono uppercase items-center space-x-2 ">
        <GlobeAltIcon className="h-4 " />
        <span>FID</span>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("feedIm", {
    header: () => (
      <div className="flex uppercase font-mono items-center space-x-2 ">
        <CircleStackIcon className="h-4" />
        <span>AID</span>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2 `}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("forExch", {
    header: () => (
      <div className="flex items-center space-x-2 ">
        <ChartBarIcon className="h-4" />
        <span>FER</span>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("supplyReliab", {
    header: () => (
      <div className="flex items-center space-x-2 ">
        <UsersIcon className="h-4" />
        <span>KFTP</span>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("supplyRoboost", {
    header: () => (
      <div className="flex uppercase font-mono items-center space-x-2 ">
        <ArrowTrendingUpIcon className="h-4" />
        <span>CYV</span>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("climatePolicy", {
    header: () => (
      <div className="flex items-center uppercase font-mono space-x-2 ">
        <CloudIcon className="h-4" />
        <span>FTI</span>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2`}>
        {info.getValue()}
      </div>
    ),
  }),
];

export default function TableIndex() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pinnedRows, setPinnedRows] = useState<Record<string, boolean>>({});

  const togglePinnedRow = (rowId: string) => {
    setPinnedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  useEffect(() => {
    const calculatedCountires = mapperRawToCalculatedCountries(fakeCountries);
    setCountries(calculatedCountires);
  }, []);
  const changeCountryName = () => {
    if (countries.length > 0) {
      const updatedCountries = [...countries];
      updatedCountries[0].nation = "Nigeria";
      setCountries(updatedCountries);
    }
  };

  const toggleRowExpansion = (rowId: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const table = useReactTable({
    data: countries,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // Enable sorting model
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  // Separate pinned rows from the sorting logic
  const pinnedRowIds = Object.keys(pinnedRows).filter((key) => pinnedRows[key]);
  const pinnedRowsData = table
    .getRowModel()
    .rows.filter((row) => pinnedRowIds.includes(row.id));
  const unpinnedRowsData = table
    .getRowModel()
    .rows.filter((row) => !pinnedRowIds.includes(row.id));

  return (
    <div>
      <table className="min-w-full text-sm table-auto font-mono">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="px-2">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`text-left px-2 cursor-pointer ${
                    header.column.getIsSorted() ? "sorted-header" : ""
                  }`}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === "asc" ? (
                        <span className="ml-2">▲</span>
                      ) : (
                        <span className="ml-2">▼</span>
                      )
                    ) : (
                      <span className="ml-2">⇅</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {/* Render pinned rows first */}
          {pinnedRowsData.map((row, index) => (
            <React.Fragment key={row.id}>
              <tr className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`border ${
                      cell.column.getIsSorted() ? "sorted-cell" : ""
                    }`}
                  >
                    {cell.column.id === "nation" ? (
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center space-x-1">
                          <input
                            type="checkbox"
                            checked={!!pinnedRows[row.id]}
                            onChange={() => togglePinnedRow(row.id)}
                          />
                          {/* Button to toggle hidden rows */}
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>

                        <button
                          onClick={() => toggleRowExpansion(row.id)}
                          className="mr-2"
                        >
                          {expandedRows[row.id] ? "▲" : "▼"}
                        </button>
                      </div>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                ))}
              </tr>
              {expandedRows[row.id] && (
                <>
                  {row.original.years.map((yearData, index) => (
                    <React.Fragment key={`${row.id}-year-${index}`}>
                      <tr>
                        <td className="px-4  border">{yearData.year}</td>
                        <td>{yearData.overallScore}</td>
                        <td
                          className={`${getBgColorString(
                            yearData.jameelIndex
                          )} px-4 py-2 border`}
                        >
                          {yearData.jameelIndex}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.foodIm
                          )} px-4 py-2 border`}
                        >
                          {yearData.foodIm}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.feedIm
                          )} px-4 py-2 border`}
                        >
                          {yearData.feedIm}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.forExch
                          )} px-4 py-2 border`}
                        >
                          {yearData.forExch}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.supplyReliab
                          )} px-4 py-2 border`}
                        >
                          {yearData.supplyReliab}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.supplyRoboost
                          )} px-4 py-2 border`}
                        >
                          {yearData.supplyRoboost}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.climatePolicy
                          )} px-4 py-2 border`}
                        >
                          {yearData.climatePolicy}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </>
              )}
            </React.Fragment>
          ))}

          {/* Render unpinned sorted rows */}
          {unpinnedRowsData.map((row, index) => (
            <React.Fragment key={row.id}>
              <tr className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`border ${
                      cell.column.getIsSorted() ? "sorted-cell" : ""
                    }`}
                  >
                    {cell.column.id === "nation" ? (
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center ">
                          <input
                            type="checkbox"
                            className="mx-2"
                            checked={!!pinnedRows[row.id]}
                            onChange={() => togglePinnedRow(row.id)}
                          />

                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>

                        <button
                          onClick={() => toggleRowExpansion(row.id)}
                          className="mr-2"
                        >
                          {expandedRows[row.id] ? "▲" : "▼"}
                        </button>
                      </div>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                ))}
              </tr>
              {expandedRows[row.id] && (
                <>
                  {row.original.years.map((yearData, index) => (
                    <React.Fragment key={`${row.id}-year-${index}`}>
                      <tr>
                        <td className="px-4 py-2 border">{yearData.year}</td>
                        <td>{yearData.overallScore}</td>
                        <td
                          className={`${getBgColorString(
                            yearData.jameelIndex
                          )} px-4 py-2 border`}
                        >
                          {yearData.jameelIndex}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.foodIm
                          )} px-4 py-2 border`}
                        >
                          {yearData.foodIm}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.feedIm
                          )} px-4 py-2 border`}
                        >
                          {yearData.feedIm}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.forExch
                          )} px-4 py-2 border`}
                        >
                          {yearData.forExch}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.supplyReliab
                          )} px-4 py-2 border`}
                        >
                          {yearData.supplyReliab}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.supplyRoboost
                          )} px-4 py-2 border`}
                        >
                          {yearData.supplyRoboost}
                        </td>
                        <td
                          className={`${getBgColor(
                            yearData.climatePolicy
                          )} px-4 py-2 border`}
                        >
                          {yearData.climatePolicy}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
