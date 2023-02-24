import React from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  return (
    <div className={styles.calculatorMainContainer}>
      <div className={styles.calculator}>
        <div className={styles.result}>0</div>
        <div className={styles.calcButtons}>
          <button className={styles.operator}>C</button>
          <button className={styles.operator}>+/-</button>
          <button className={styles.operator}>%</button>
          <button className={styles.operator}>/</button>
          <button className={styles.number}>7</button>
          <button className={styles.number}>8</button>
          <button className={styles.number}>9</button>
          <button className={styles.operator}>x</button>
          <button className={styles.number}>4</button>
          <button className={styles.number}>5</button>
          <button className={styles.number}>6</button>
          <button className={styles.operator}>-</button>
          <button className={styles.number}>1</button>
          <button className={styles.number}>2</button>
          <button className={styles.number}>3</button>
          <button className={styles.operator}>+</button>
          <button className={`${styles.number} ${styles.zeroNumber}`}>0</button>
          <button className={styles.operator}>.</button>
          <button className={styles.operator}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
