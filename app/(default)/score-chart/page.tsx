import TableIndex from "@/components/custom/TableIndex";
import TableIndexV2 from "@/components/custom/TableIndexV2";
import TESTTableComponent from "@/components/test-components/TestTableComponent";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Score chart | Jameel Index for Food Trade and Vulnerability',
  description: 'Description of the score chart page',
}


export default function TablePage() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
      <div className="pt-32 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-3xl mx-auto text-center pb-12">
              <h1 className="font-mono text-4xl md:text-5xl font-bold text-black pb-4">
                Score chart</h1>
              <p className="text-lg text-zinc-500">The Jameel Index measures global food security vulnerability, dependence on global trade, and regional threats impacting trade of food goods. The score chart allows you to sort each of the indicators to see how countries rank.
                </p>
            </div>
        <div className="px-4 sm:px-6 max-w-7xl mx-auto">

          <TableIndexV2 />
          <p className="py-8">As of September 2024, the above data is preliminary</p>

        </div>
      </div>
    </section>
  );
}
