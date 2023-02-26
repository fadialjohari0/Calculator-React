import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

const CalculatorContextProvider = ({ children }) => {
  const [calculationHistory, setCalculationHistory] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [isHistorySelected, setIsHistorySelected] = useState(false);

  const handleCalculation = (calculation) => {
    setCalculationHistory((prevCalc) => [...prevCalc, calculation]);
  };

  const handleCalculationSelect = (index) => {
    setCalculationHistory((prevCalc) => prevCalc.slice(0, index + 1));
  };
  return (
    <CalculatorContext.Provider
      value={{
        calculationHistory,
        handleCalculation,
        handleCalculationSelect,
        selectedHistory,
        setSelectedHistory,
        setIsHistorySelected,
        isHistorySelected,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
