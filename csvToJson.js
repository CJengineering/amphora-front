const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

// Define the path to your CSV file
const csvFilePath = path.join(__dirname, 'app/data/Jameel Index 2020 Full.csv');

// Helper function to clean percentage values
const cleanPercentage = (value) => {
  if (typeof value === 'string' && value.includes('%')) {
    return parseFloat(value.replace('%', '')) / 100;
  }
  return parseFloat(value);
};

// Function to transform CSV rows into the desired CountryData format
const transformCSVToCountryData = (csvData) => {
  return csvData.map((row) => ({
    nation: row["Nation"], // Correct mapping for 'Nation'
    overallScore: 1, // Clean percentage
    jameelIndex: '',  // Ensure 'Jameel Index.1' is mapped to jameelIndex
    foodIm: parseFloat(row["Food IM Dep"]), // Parse numerical values
    feedIm: parseFloat(row["Feed IM Dep"]),
    forExch: parseFloat(row["For Exch "]),  // Adjusted for extra space
    supplyReliab: parseFloat(row["Supply Reliab"]),
    supplyRoboost: parseFloat(row["Supply Robust"]),
    climatePolicy: parseFloat(row["Climate Policy"]),
    years: []  // Empty array as per the request
  }));
};

// Function to read CSV file, parse it, and write the result as JSON
const convertCSVToJson = () => {
  fs.readFile(csvFilePath, 'utf8', (err, fileData) => {
    if (err) {
      console.error('Error reading CSV file:', err);
      return;
    }

    // Parse CSV data
    Papa.parse(fileData, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const countryData = transformCSVToCountryData(result.data);

        // Write JSON to file
        const outputFilePath = path.join(__dirname, 'output.json');
        fs.writeFile(outputFilePath, JSON.stringify(countryData, null, 2), (writeErr) => {
          if (writeErr) {
            console.error('Error writing JSON file:', writeErr);
            return;
          }
          console.log('CSV data successfully converted to JSON and saved to output.json');
        });
      },
      error: (parseErr) => {
        console.error('Error parsing CSV file:', parseErr);
      },
    });
  });
};

// Run the conversion function
convertCSVToJson();
