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
import { ArrowTrendingUpIcon, BeakerIcon, ChartBarIcon, CircleStackIcon, CloudIcon, DivideIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/outline'

interface CountryPerYear {
  year: string;
  overallScore: string;
  jameelIndex: number;
  foodIm: number;
  feedIm: number;
  forExch: number;
  supplyReliab: number;
  supplyRoboost: number;
  climatePolicy: number;
}

export interface CountryData {
  nation: string;
  overallScore: string;
  jameelIndex: number;
  foodIm: number;
  feedIm: number;
  forExch: number;
  supplyReliab: number;
  supplyRoboost: number;
  climatePolicy: number;
  years: CountryPerYear[];
}

// Color mapper: values 0 to 5, light green to dark orange
const getBgColor = (value: number) => {
  if (value <= 1) return "bg-green-200"; // light green for 0-1
  if (value <= 2) return "bg-yellow-200"; // lighter orange for 2
  if (value <= 3) return "bg-yellow-400"; // light orange for 3
  if (value <= 4) return "bg-orange-400"; // darker orange for 4
  return "bg-orange-600"; // dark orange for 5
};

const columnHelper = createColumnHelper<CountryData>();
const columns = [


  columnHelper.accessor("nation", {
    header: () => <div className="mr-2 uppercase font-mono">Country</div> ,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("overallScore", {
    header: () => <div className="font-mono uppercase ">OVERALL</div> ,
    cell: (info) =><div className="px-2">{info.getValue()}</div> ,
  }),
  columnHelper.accessor("jameelIndex", {
    header: () => <div  className="font-mono uppercase ">  JIS</div>,
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} `}>
       {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("foodIm", {
    header: () => <div className="flex font-mono uppercase items-center space-x-2 "><GlobeAltIcon className="h-4 "/><span>FID</span></div>,
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} `}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("feedIm", {
    header: () => <div className="flex uppercase font-mono items-center space-x-2 "><CircleStackIcon className="h-4"/><span>AID</span></div>,
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2 `}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("forExch", {
    header: () => <div className="flex items-center space-x-2 "><ChartBarIcon className="h-4"/><span>FER</span></div>,
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("supplyReliab", {
    header: () => <div className="flex items-center space-x-2 "><UsersIcon className="h-4"/><span>KFTP</span></div>,
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("supplyRoboost", {
    header: () => <div className="flex uppercase font-mono items-center space-x-2 "><ArrowTrendingUpIcon className="h-4"/><span>CYV</span></div>,
    cell: (info) => (
      <div className={`${getBgColor(info.getValue())} p-2`}>
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor("climatePolicy", {
    header: () => <div className="flex items-center uppercase font-mono space-x-2 "><CloudIcon className="h-4"/><span>FTI</span></div>,
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
    setCountries(fakeCountries);
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
                  className=" text-left px-2  cursor-pointer"
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
          {pinnedRowsData.map((row,index) => (
            <React.Fragment key={row.id}>
              <tr className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className=" border">
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
                          cell.getContext(),
                          

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
                        <td
                        
                        >
                          {yearData.overallScore}
                        </td>
                        <td
                          className={`${getBgColor(
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
                  <td key={cell.id} className="py-2 border">
                    {cell.column.id === "nation" ? (
                      <div className="flex items-center justify-between ">
                      <div className="flex items-center ">
                  
                      <input
                        type="checkbox"
                        className="mx-2"
                        checked={!!pinnedRows[row.id]}
                        onChange={() => togglePinnedRow(row.id)}
                      />
                      {/* Button to toggle hidden rows */}
                      {}
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
                      <tr >
                        <td className="px-4 py-2 border">{yearData.year}</td>
                        <td
                         
                        >
                          {yearData.overallScore}
                        </td>
                        <td
                          className={`${getBgColor(
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
