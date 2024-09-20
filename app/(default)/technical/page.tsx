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
      <div className="">
        <div className="max-w-6xl mx-auto">
        <div className="pt-32 pb-12 lg:pt-36 md:pb-20">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-mono text-4xl md:text-5xl font-bold text-black pb-4">
                The six indicators</h1>
              <p className="text-lg text-zinc-500">Vetted by a panel of 12 of the world's leading food experts, the six meta-indicators of the Jameel Index were selected to directly map to three of the six dimensions of food security. The criteria for selecting meta-indicators were to have a few as possible that cover the major elements that impact the food trade aspects of food security.
 </p>
            </div>
         </div>  
         </div> 
          <div className="space-y-6"> {/* Adding space between Accordions */}
          <MetaIndicatorList />
            
          </div>
        </div>
      </div>
    </section>
  );
}
