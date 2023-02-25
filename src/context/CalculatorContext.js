import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

const CalculatorContextProvider = ({ children }) => {
  const [calculationHistory, setCalculationHistory] = useState([]);

  const handleCalculation = (calculation) => {
    setCalculationHistory((prevHistory) => [...prevHistory, calculation]);
  };

  const handleCalculationSelect = (index) => {
    setCalculationHistory((prevHistory) => prevHistory.slice(0, index + 1));
  };
  console.log(calculationHistory);
  return (
    <CalculatorContext.Provider
      value={{ calculationHistory, handleCalculation, handleCalculationSelect }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
