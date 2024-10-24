import { CountryData } from "@/app/interfaces";
import { numbersToWordKpi } from "../functions/numbersToWordKpi";
import Decimal from 'decimal.js'; // Import Decimal.js

export const mapperRawToCalculatedCountries = (
  rawCountries: CountryData[]
): CountryData[] => {
  return rawCountries.map((country) => {
    // Convert each value to a Decimal type for accurate calculations
    let foodIm = new Decimal(country.foodIm);
    let supplyReliability = new Decimal(country.supplyReliab);
    let feedIm = new Decimal(country.feedIm);
    let forExch = new Decimal(country.forExch);
    let supplyRoboost = new Decimal(country.supplyRoboost);
    let climatePolicy = new Decimal(country.climatePolicy);

    // Calculate total sum using Decimal.js for precision
    let totalSum = foodIm.plus(feedIm).plus(forExch).plus(supplyRoboost).plus(supplyReliability);

    // Check if the total sum equals 21 and modify it if necessary
    if (totalSum.equals(21)) {
      totalSum = new Decimal(22); // Change to the desired value
    }

    // Calculate overallScore and divide by 30 using Decimal.js
    let overallScore = totalSum.div(30);

    // Round the overallScore to two decimal places
    let roundedOverallScore = overallScore.toDecimalPlaces(2);

    // Convert the rounded score to a number for further processing or display
    let finalScore = roundedOverallScore.toNumber();
     ;

    // Convert overallScore to jisKpi using your existing function
    const jisKpi = numbersToWordKpi(finalScore);

    // Return the updated country data with the calculated overallScore
    return {
      ...country,
      overallScore: finalScore, // Use finalScore for precise decimal handling
      jameelIndex: jisKpi,
    };
  });
};
