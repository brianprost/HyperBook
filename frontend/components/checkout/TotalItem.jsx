import React from "react";

const TotalItem = ({ title, value, style }) => {
  return (
    <div className={`${style}`}>
      <span className="font-bold">{title}</span>
      <span className="font-bold text-red-500">{value}</span>
    </div>
  );
};

export default TotalItem;
