import React, { useContext } from "react";
import styles from "./History.module.css";
import { CalculatorContext } from "../../context/CalculatorContext";

const History = () => {
  const { calculationHistory, handleCalculationSelect } =
    useContext(CalculatorContext);

  const handleClick = (index) => {
    handleCalculationSelect(index);
  };

  return (
    <div className={styles.history}>
      {calculationHistory.map((result, index) => (
        <h1
          key={index}
          className={styles.result}
          onClick={() => handleClick(index)}
        >
          {result}
        </h1>
      ))}
    </div>
  );
};

export default History;
