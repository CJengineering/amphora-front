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
import { countriesData } from "@/app/data/countries";

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
const createPercent = (value: number) => {
    const percent = Math.round(value * 100 * 100) / 100;
  return `${percent}%`;
};

const checkColumnName = (name: string) => {
  if (
    name === "overallScore" ||
    "feed Im" ||
    "food Im" ||
    "forExch" ||
    "supplyReliab" ||
    "supplyRoboost" ||
    "climatePolicy"
  ) {
    return "hidden ";
  }
  return "";
};
const columnHelper = createColumnHelper<CountryData>();
const columns = [
  columnHelper.accessor("nation", {
    header: () => <div className="mr-2 uppercase font-mono">Country</div>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("overallScore", {
    header: () => (
      <div className="font-mono uppercase hidden md:block ">OVERALL</div>
    ),
    cell: (info) => (
      <div className={`${getBgColorPercentage(info.getValue())} p-4 `}>
        {createPercent(info.getValue())}
      </div>
    ),
  }),
  columnHelper.accessor("jameelIndex", {
    header: () => (
        <div className="relative font-mono uppercase items-center space-x-2 hidden md:flex group">
       
        <span>JIS</span>
        <div className="absolute z-20 top-[-70px] hidden  left-0 w-[300px] group-hover:block p-2 bg-gray-100 text-sm border rounded-md shadow-md normal-case">
          <p className=" normal-case">Jameel Index</p>
          <p className="text-xs normal-case">
            Measures the percentage of a country's food demand met through
            imports.
          </p>
        </div>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColorString(info.getValue())} p-4 `}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("foodIm", {
    header: () => (
      <div className="relative font-mono uppercase items-center space-x-2 hidden md:flex group">
        <GlobeAltIcon className="h-4" />
        <span>FID</span>
        <div className="absolute z-20 top-[-70px] hidden  left-0 w-[300px] group-hover:block p-2 bg-gray-100 text-sm border rounded-md shadow-md normal-case">
          <p className=" normal-case">Food Import Dependency</p>
          <p className="text-xs normal-case">
            Measures the percentage of a country's food demand met through
            imports.
          </p>
        </div>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-4`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("feedIm", {
    header: () => (
      <div className="relative hidden md:flex uppercase font-mono items-center space-x-2 group">
        <CircleStackIcon className="h-4" />
        <span>AID</span>
        <div className="absolute z-20 hidden group-hover:block top-[-70px] left-0 w-[300px]  p-2 bg-gray-100 text-sm border rounded-md shadow-md normal-case">
          <p className=" normal-case">Animal Feed Import Dependency</p>
          <p className="text-xs normal-case">
            Tracks the percentage of animal feed demand met by imports.
          </p>
        </div>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-4`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("forExch", {
    header: () => (
      <div className="relative hidden md:flex items-center space-x-2 group">
        <ChartBarIcon className="h-4" />
        <span>FER</span>
        <div className="absolute z-20 top-[-70px] left-0 w-[300px] hidden group-hover:block p-2 bg-gray-100 text-sm border rounded-md shadow-md normal-case">
          <p className=" normal-case">Food Import to Export Ratio</p>
          <p className="text-xs normal-case">
            Compares the value of food imports to a country's total export
            value.
          </p>
        </div>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-4`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("supplyReliab", {
    header: () => (
      <div className="relative hidden md:flex items-center space-x-2 group">
        <UsersIcon className="h-4" />
        <span>KFTP</span>
        <div className="absolute z-20 top-[-70px] left-0 w-[300px] hidden group-hover:block p-2 bg-gray-100 text-sm border rounded-md shadow-md normal-case">
          <p className="normal-case">Key Food Trade Partners</p>

          <p className="text-xs normal-case">
            Counts the number of trade partners supplying 80% of food imports.
          </p>
        </div>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-4`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("supplyRoboost", {
    header: () => (
      <div className="relative hidden md:flex uppercase font-mono items-center space-x-2 group">
        <ArrowTrendingUpIcon className="h-4" />
        <span>CYV</span>
        <div className="absolute z-20 top-[-70px] left-0 w-[300px] hidden group-hover:block p-2 bg-gray-100 text-sm border rounded-md shadow-md normal-case">
          <p className="font-bold normal-case">Annual Crop Yield Variability</p>
          <p className="text-xs normal-case">
            Assesses the annual fluctuation in crop yields for a country.
          </p>
        </div>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-4`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("climatePolicy", {
    header: () => (
      <div className="relative flex items-center uppercase font-mono space-x-2 group">
        <CloudIcon className="h-4" />
        <span>FTI</span>
        <div className="absolute z-20 top-[-70px] left-0 w-[300px] hidden group-hover:block p-2 bg-gray-100 text-sm border rounded-md shadow-md normal-case">
          <p className="font-bold normal-case">
            Food Shipment Emission Tax Impact
          </p>
          <p className="text-xs normal-case">
            Evaluates the effect of greenhouse gas emission taxes on food
            shipment costs.
          </p>
        </div>
      </div>
    ),
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-4`}>
        {info.getValue()}
      </div>
    ),
  }),
];

export default function TableIndexV2() {
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
    const calculatedCountires = mapperRawToCalculatedCountries(countriesData);
    setCountries(calculatedCountires);
  }, []);

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
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

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
            <tr key={headerGroup.id} className="px-2 h-8">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`text-left px-2 cursor-pointer ${
                    header.column.getIsSorted() ? "sorted-header" : ""
                  } ${
                    header.id === "nation" || header.id === "jameelIndex"
                      ? ""
                      : "hidden md:table-cell"
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
          {pinnedRowsData.map((row) => (
            <React.Fragment key={row.id}>
              <tr className="hover:bg-gray-100 ">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`border ${
                      cell.column.getIsSorted() ? "sorted-cell" : ""
                    } ${
                      cell.column.id === "nation" ||
                      cell.column.id === "jameelIndex"
                        ? ""
                        : "hidden md:table-cell"
                    }`}
                  >
                    {cell.column.id === "nation" ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <input
                            type="checkbox"
                            checked={!!pinnedRows[row.id]}
                            onChange={() => togglePinnedRow(row.id)}
                            className="mx-2"
                          />
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                        <button
                          className="md:hidden"
                          onClick={() => toggleRowExpansion(row.id)}
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

              {/* Expanded view in mobile for hidden columns */}
              {expandedRows[row.id] && (
                <tr className="md:hidden">
                  <td colSpan={2} className="">
                    <div className="">
                      <div
                        className={`${getBgColor(
                          row.original.foodIm
                        )} border p-2`}
                      >
                        <span className="font-bold">Food Im:</span>{" "}
                        {row.original.foodIm}
                      </div>
                      <div
                        className={`${getBgColor(
                          row.original.feedIm
                        )} border p-2`}
                      >
                        <span className="font-bold">Feed Im:</span>{" "}
                        {row.original.feedIm}
                      </div>
                      <div
                        className={`${getBgColor(
                          row.original.forExch
                        )} border p-2`}
                      >
                        <span className="font-bold">ForExch:</span>{" "}
                        {row.original.forExch}
                      </div>
                      <div
                        className={`${getBgColor(
                          row.original.supplyReliab
                        )} border p-2`}
                      >
                        <span className="font-bold">SupplyReliab:</span>{" "}
                        {row.original.supplyReliab}
                      </div>
                      <div
                        className={`${getBgColor(
                          row.original.supplyRoboost
                        )} border p-2`}
                      >
                        <span className="font-bold">SupplyRoboost:</span>{" "}
                        {row.original.supplyRoboost}
                      </div>
                      <div
                        className={`${getBgColor(
                          row.original.climatePolicy
                        )} border p-2`}
                      >
                        <span className="font-bold">Climate Policy:</span>{" "}
                        {row.original.climatePolicy}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}

          {unpinnedRowsData.map((row) => (
            <React.Fragment key={row.id}>
              <tr className="hover:bg-gray-10 h-10">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`border ${
                      cell.column.getIsSorted() ? "sorted-cell" : ""
                    } ${
                      cell.column.id === "nation" ||
                      cell.column.id === "jameelIndex"
                        ? ""
                        : "hidden md:table-cell"
                    }`}
                  >
                    {cell.column.id === "nation" ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="mx-2 hidden md:block"
                            checked={!!pinnedRows[row.id]}
                            onChange={() => togglePinnedRow(row.id)}
                          />
                          <div className="mx-2 block md:hidden"></div>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                        <button
                          className="md:hidden"
                          onClick={() => toggleRowExpansion(row.id)}
                        >
                          {expandedRows[row.id] ? "▲" : "▼"}
                        </button>
                      </div>
                    ) : (
                      <div className="md:block">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    )}
                  </td>
                ))}
              </tr>

              {/* Expanded view in mobile for hidden columns */}
              {expandedRows[row.id] && (
                <tr className="md:hidden">
                  <td colSpan={2} className="">
                    <div className="">
                      {/* Iterate over the remaining columns */}
                      {[
                        {
                          header: "Food Import Dependency",
                          value: row.original.foodIm,
                          bgColor: getBgColor(row.original.foodIm),
                        },
                        {
                          header: "Animal Feed Import Dependency",
                          value: row.original.feedIm,
                          bgColor: getBgColor(row.original.feedIm),
                        },
                        {
                          header: "Food Import to Export Ratio",
                          value: row.original.forExch,
                          bgColor: getBgColor(row.original.forExch),
                        },
                        {
                          header: "Key Food Trade Partners",
                          value: row.original.supplyReliab,
                          bgColor: getBgColor(row.original.supplyReliab),
                        },
                        {
                          header: "Annual Crop Yield Variability",
                          value: row.original.supplyRoboost,
                          bgColor: getBgColor(row.original.supplyRoboost),
                        },
                        {
                          header: "Food Shipment Emission Tax Impact",
                          value: row.original.climatePolicy,
                          bgColor: getBgColor(row.original.climatePolicy),
                        },
                      ].map((item, index) => (
                        <div className="flex" key={index}>
                          <div className="flex items-center  pl-4   h-8 w-[100%] border  ">
                            {item.header}
                          </div>
                          <div
                            className={`flex h-8 items-center justify-center ${item.bgColor} w-[30%] `}
                          >
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
