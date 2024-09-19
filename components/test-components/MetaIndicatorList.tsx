'use client'
import Accordion from "../accordion";

interface MetaIndicatorType {
    title: string;
    description: string;
    formula: string;
  }
  const metaIndicators = [
    {
      "title": "Food Import Dependency Ratio",
      "description": "Measures how dependent a nation’s food supply across all commodities is on imports.",
      "formula": "IDRc = IMc / TDc (Food Import Dependency Ratio = Food Imports / Total National Demand)"
    },
    {
      "title": "Feed Import Dependency Ratio",
      "description": "Measures a nation’s feed supply dependency on imports from key grain commodities.",
      "formula": "FIDRgc = IDRgc * FRgc (Feed Import Dependency Ratio = Import Dependency Ratio * Feed Use Ratio)"
    },
    {
      "title": "Food Import to Foreign Exchange Ratio",
      "description": "Assesses how much food imports depend on a nation’s total export earnings, indicating economic vulnerability.",
      "formula": "FFXRc = FIMc / EX (Food Import Foreign Exchange Ratio = Value of Food Imports / Total Exports)"
    },
    {
      "title": "Supply Chain Reliability",
      "description": "Evaluates the reliability of food supply from exporting nations, focusing on climate variability.",
      "formula": "COVc = Σ PXcx * COVcx (Weighted Coefficient of Variation based on exporter reliability)"
    },
    {
      "title": "Supply Chain Robustness",
      "description": "Measures the robustness of the food supply chain based on the number of exporters supplying 80% of imports.",
      "formula": "NPc = Number of Exporters (who supply 80% of Commodity C imports)"
    },
    {
      "title": "Climate Policy Impact",
      "description": "Assesses the impact of carbon tax on imported commodities and its effect on food availability and hunger risk.",
      "formula": "Step 1: taxCc = Σ (TONcx * CT)\nStep 2: perPC = Σc (perPCc * dietc)\nStep 3: perFood = ε * perPC\nStep 4: deltaRisk = Risktax - Risknotax"
    }
  ]
  
  const MetaIndicator = ({ title, description, formula }: MetaIndicatorType) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        <h2>{title}</h2>
        <div>{description}</div>
        <div style={{ background: '#f9f9f9', padding: '10px', fontFamily: 'monospace' }}>
          <strong>Formula:</strong> <br />
          {formula}
        </div>
      </div>
    );
  };
  
  const MetaIndicatorList = () => {
    return (
      <div>
        <h1>Food Security Meta-Indicators</h1>
        {metaIndicators.map((indicator, index) => (
            <Accordion title={indicator.title}  id={indicator.title} >

                <MetaIndicator 
                  key={index}
                  title={indicator.title}
                  description={indicator.description}
                  formula={indicator.formula}
                />
            </Accordion>
            
        ))}
      </div>
    );
  };
  
  export default MetaIndicatorList;