import React from "react";
import Calculator from "./calculator/Calculator";
import History from "./history/History";
import CalculatorContextProvider from "../context/CalculatorContext";
const CalculatorView = () => {
  return (
    <div>
      <CalculatorContextProvider>
        <Calculator />
        <History />
      </CalculatorContextProvider>
    </div>
  );
};

export default CalculatorView;
