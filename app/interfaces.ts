export interface CountryPerYear {
    year: string;
    overallScore: number;
    jameelIndex: string;
    foodIm: number;
    feedIm: number;
    forExch: number;
    supplyReliab: number;
    supplyRoboost: number;
    climatePolicy: number;
  }
  
  export interface CountryData {
    nation: string;
    overallScore: number;
    jameelIndex: string;
    foodIm: number;
    feedIm: number;
    forExch: number;
    supplyReliab: number;
    supplyRoboost: number;
    climatePolicy: number;
    years: CountryPerYear[];
  }