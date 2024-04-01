import React from "react";
import "./tag.css";

const Tag = ({ children, isSelected = false, textColor }) => {
  return (
    <span
      className="tag-container"
      style={{
        color: textColor ? textColor : isSelected ? "#3861FB" : "#5B667C",
      }}
    >
      {children}
    </span>
  );
};

export default Tag;
