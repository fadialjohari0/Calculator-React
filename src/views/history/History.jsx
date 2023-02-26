import React, { useContext } from "react";
import styles from "./History.module.css";
import { CalculatorContext } from "../../context/CalculatorContext";

const History = () => {
  const {
    calculationHistory,
    handleCalculationSelect,
    setSelectedHistory,
    setIsHistorySelected,
  } = useContext(CalculatorContext);

  const handleClick = (result, index) => {
    handleCalculationSelect(index);
    setSelectedHistory(result.substring(result.indexOf("=") + 1));
    setIsHistorySelected(true);
  };

  return (
    <div className={styles.historyContainer}>
      {calculationHistory.map((result, index) => (
        <p
          key={index}
          className={styles.historyResult}
          onClick={() => {
            handleClick(result, index);
          }}
        >
          {result}
        </p>
      ))}
    </div>
  );
};

export default History;
