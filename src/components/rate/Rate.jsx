import React from "react";
import "./rate.css";

const Rate = ({ isIncreasing = true, value, justifyContent }) => {
  return (
    <span
      className="rate-container"
      style={{ color: isIncreasing ? "#16C784" : "#EA3943", justifyContent: justifyContent}}
    >
      {isIncreasing ? (
        <img src="/images/increasing.svg" />
      ) : (
        <img src="/images/decreasing.svg" />
      )}
      {Math.abs(value).toFixed(2)}%
    </span>
  );
};

export default Rate;
