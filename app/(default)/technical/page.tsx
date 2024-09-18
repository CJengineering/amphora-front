import Accordion from "@/components/accordion";
import React from "react";

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
            <Accordion title="Jameel Index" id="jameel-index">
              <div slot="title">Jameel Index</div>
              <div slot="content">
                <p>
                  Measures the percentage of a country's food demand met through
                  imports.
                </p>
              </div>
            </Accordion>

            <Accordion
              title="Food Import Dependency"
              id="food-import-dependency"
            >
              <div slot="title">Food Import Dependency</div>
              <div slot="content">
                <p>
                  Measures the percentage of a country's food demand met through
                  imports.
                </p>
              </div>
            </Accordion>

            <Accordion
              title="Animal Feed Import Dependency"
              id="animal-feed-import-dependency"
            >
              <div slot="title">Animal Feed Import Dependency</div>
              <div slot="content">
                <p>
                  Tracks the percentage of animal feed demand met by imports.
                </p>
              </div>
            </Accordion>

            <Accordion
              title="Food Import to Export Ratio"
              id="food-import-export-ratio"
            >
              <div slot="title">Food Import to Export Ratio</div>
              <div slot="content">
                <p>
                  Compares the value of food imports to a country's total export
                  value.
                </p>
              </div>
            </Accordion>

            <Accordion
              title="Key Food Trade Partners"
              id="key-food-trade-partners"
            >
              <div slot="title">Key Food Trade Partners</div>
              <div slot="content">
                <p>
                  Counts the number of trade partners supplying 80% of food
                  imports.
                </p>
              </div>
            </Accordion>

            <Accordion
              title="Annual Crop Yield Variability"
              id="annual-crop-yield-variability"
            >
              <div slot="title">Annual Crop Yield Variability</div>
              <div slot="content">
                <p>
                  Assesses the annual fluctuation in crop yields for a country.
                </p>
              </div>
            </Accordion>

            <Accordion
              title="Food Shipment Emission Tax Impact"
              id="food-shipment-emission-tax-impact"
            >
              <div slot="title">Food Shipment Emission Tax Impact</div>
              <div slot="content">
                <p>
                  Evaluates the effect of greenhouse gas emission taxes on food
                  shipment costs.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
