import React, { useContext, useState } from "react";
import styles from "./Calculator.module.css";
import { CalculatorContext } from "../../context/CalculatorContext";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [storedValue, setStoredValue] = useState("");

  const { handleCalculation } = useContext(CalculatorContext);

  const executeCalculation = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "%":
        return num1 % num2;
      case "+/-":
        return num1 * -1;
      case ".":
        return parseFloat(num1 + "." + num2);
      default:
        return 0;
    }
  };

  const handleClick = (char) => {
    switch (char) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (displayValue === "0") {
          setDisplayValue(char);
        } else {
          setDisplayValue(displayValue + char);
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
      case "+/-":
      case ".":
        setOperator(char);
        setStoredValue(displayValue);
        setDisplayValue("0");
        break;
      case "C":
        setDisplayValue("0");
        setOperator("");
        setStoredValue("");
        break;
      case "=":
        let [num1, num2] = [parseFloat(storedValue), parseFloat(displayValue)];
        let result = executeCalculation(num1, num2, operator);
        setDisplayValue(result.toFixed(1));
        setOperator("");
        setStoredValue("");
        handleCalculation(`${num1} ${operator} ${num2} = ${result}`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <div className={styles.calculator}>
        <div className={styles.result}>
          <p className={styles.resultValue}>{displayValue}</p>
        </div>
        <div className={styles.calcButtons}>
          <button className={styles.operator} onClick={() => handleClick("C")}>
            C
          </button>
          <button
            className={styles.operator}
            onClick={() => handleClick("+/-")}
          >
            +/-
          </button>
          <button className={styles.operator} onClick={() => handleClick("%")}>
            %
          </button>
          <button className={styles.operator} onClick={() => handleClick("/")}>
            /
          </button>
          <button className={styles.number} onClick={() => handleClick("7")}>
            7
          </button>
          <button className={styles.number} onClick={() => handleClick("8")}>
            8
          </button>
          <button className={styles.number} onClick={() => handleClick("9")}>
            9
          </button>
          <button className={styles.operator} onClick={() => handleClick("*")}>
            x
          </button>
          <button className={styles.number} onClick={() => handleClick("4")}>
            4
          </button>
          <button className={styles.number} onClick={() => handleClick("5")}>
            5
          </button>
          <button className={styles.number} onClick={() => handleClick("6")}>
            6
          </button>
          <button className={styles.operator} onClick={() => handleClick("-")}>
            -
          </button>
          <button className={styles.number} onClick={() => handleClick("1")}>
            1
          </button>
          <button className={styles.number} onClick={() => handleClick("2")}>
            2
          </button>
          <button className={styles.number} onClick={() => handleClick("3")}>
            3
          </button>
          <button className={styles.operator} onClick={() => handleClick("+")}>
            +
          </button>
          <button
            className={`${styles.number} ${styles.zeroNumber}`}
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button className={styles.operator} onClick={() => handleClick(".")}>
            .
          </button>
          <button className={styles.operator} onClick={() => handleClick("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
