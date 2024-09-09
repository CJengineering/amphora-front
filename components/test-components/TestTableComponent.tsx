'use client';
import React, { useState } from "react";

const TESTTableComponent = () => {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  // Sample data for the table
  const data = [
    { id: 1, col1: "Row 1 Col 1", col2: "Row 1 Col 2", col3: "Row 1 Col 3", col4: "Row 1 Col 4", col5: "Row 1 Col 5", col6: "Row 1 Col 6" },
    { id: 2, col1: "Row 2 Col 1", col2: "Row 2 Col 2", col3: "Row 2 Col 3", col4: "Row 2 Col 4", col5: "Row 2 Col 5", col6: "Row 2 Col 6" },
    { id: 3, col1: "Row 3 Col 1", col2: "Row 3 Col 2", col3: "Row 3 Col 3", col4: "Row 3 Col 4", col5: "Row 3 Col 5", col6: "Row 3 Col 6" },
  ];

  // Toggle expanded row
  const toggleRowExpansion = (rowId: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  return (
    <div className="w-full">
      {/* Table for Desktop */}
      <table className="min-w-full text-sm hidden lg:table">
        <thead>
          <tr>
            <th className="border p-2">Column 1</th>
            <th className="border p-2">Column 2</th>
            <th className="border p-2">Column 3</th>
            <th className="border p-2">Column 4</th>
            <th className="border p-2">Column 5</th>
            <th className="border p-2">Column 6</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="border p-2">{row.col1}</td>
              <td className="border p-2">{row.col2}</td>
              <td className="border p-2">{row.col3}</td>
              <td className="border p-2">{row.col4}</td>
              <td className="border p-2">{row.col5}</td>
              <td className="border p-2">{row.col6}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table for Mobile */}
      <div className="block lg:hidden">
        {data.map((row) => (
          <div key={row.id} className="border-b p-4">
            <div className="flex justify-between">
              <div>
                <strong>Column 1:</strong> {row.col1}
              </div>
              <div>
                <strong>Column 2:</strong> {row.col2}
              </div>
              <button
                className="ml-4 text-blue-600"
                onClick={() => toggleRowExpansion(row.id.toString())}
              >
                {expandedRows[row.id.toString()] ? "▲" : "▼"}
              </button>
            </div>

            {expandedRows[row.id.toString()] && (
              <div className="mt-2">
                <div className="flex flex-col space-y-1">
                  <div>
                    <strong>Column 3:</strong> {row.col3}
                  </div>
                  <div>
                    <strong>Column 4:</strong> {row.col4}
                  </div>
                  <div>
                    <strong>Column 5:</strong> {row.col5}
                  </div>
                  <div>
                    <strong>Column 6:</strong> {row.col6}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TESTTableComponent;
