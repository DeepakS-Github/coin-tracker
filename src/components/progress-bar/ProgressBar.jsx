import React from "react";
import "./progress-bar.css";

const ProgressBar = ({ currentValue, maxValue, alignSelf="flex-end" }) => {
  return (
    <progress value={currentValue} max={maxValue} className="progress" style={{alignSelf: alignSelf}}/>
  );
};

export default ProgressBar;
