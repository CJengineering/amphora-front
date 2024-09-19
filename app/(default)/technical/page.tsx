import Accordion from "@/components/accordion";
import MetaIndicatorList from "@/components/test-components/MetaIndicatorList";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
    title: 'Technical | Jameel Index for Food Trade and Vulnerability',
    description: 'Description of the technical page',
  }


export default function page() {
  return (
      <section className="overflow-y-scroll max-h-screen">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-mono text-2xl leading-tight md:text-4xl font-bold text-zinc-900 mb-4">
              KPI's
            </h2>
            <p className="text-lg text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              accusamus libero adipisci! Ipsa illum eaque vero tenetur sunt ab,
              dolor dolore ex quasi, omnis reprehenderit. Quisquam adipisci alias
              praesentium reiciendis!
            </p>
          </div>
    
          <div className="space-y-6"> {/* Adding space between Accordions */}
          <MetaIndicatorList />
            
          </div>
        </div>
      </div>
    </section>
  );
}
