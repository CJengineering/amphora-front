import Accordion from "@/components/accordion";
import MetaIndicatorList from "@/components/test-components/MetaIndicatorList";
import { Metadata } from "next";
import React from "react";
export const metadata = {
    title: 'Technical | Jameel Index for Food Trade and Vulnerability',
    description: 'Description of the technical page',
    ogImage: 'https://storage.googleapis.com/cj-tech-381914-goalertbucket/JAMEEL_INDEX_OG.jpg',
  }


export default function page() {
  return (
      <section className="overflow-y-scroll max-h-screen">
      <div className="">
        <div className="max-w-6xl mx-auto">
        <div className="pt-32 lg:pt-36">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-mono text-4xl md:text-5xl font-bold text-black pb-4">
                Technical</h1>
              <p className="text-lg text-zinc-500">Vetted by a panel of 12 of the world's leading food experts, the six meta-indicators of the Jameel Index were selected to directly map to three of the six dimensions of food security. The criteria for selecting meta-indicators were to have a few as possible that cover the major elements that impact the food trade aspects of food security.
 </p>
 <div className="w-full border-t border-gray-300 m-12 px-4 sm:px-6"></div>


            </div>
         </div>  
         </div> 
         <div className="px-4 sm:px-6">
          <h2 className="text-xl font-bold sans-serif">The six indicators</h2>
<p className="sans-serif">The Six Meta-Indicators are introduced below and are described in detail in the next section.</p>
<p>The criteria for selecting Meta-Indicators were to have a few as possible that cover the major elements that impact the food trade aspects of food security.  Six meta-indicators were selected that map directly to three of the six dimensions  of food security. The final six meta indicators were vetted by a panel of twelve food policy and trade experts in a series of three virtual and one in-person workshops.</p>
<p>Meta Indicators are developed based on six trade related Topical Indicators listed in Table 2. They will be described in detail in the next section.</p>        


         </div>
          <div className="space-y-6"> {/* Adding space between Accordions */}
          <MetaIndicatorList />
            
          </div>
        </div>
      </div>
    </section>
  );
}
