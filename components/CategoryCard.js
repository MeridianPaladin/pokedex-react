import React from "react";
import { colors } from "../services/colorService";

const CategoryCard = ({ type }) => {
  return (
    <div
      className={`${colors[type].dark} flex justify-between h-24 rounded-xl items-center p-6`}
    >
      <h2 className={`font-bold ${colors[type].text} text-xl capitalize`}>
        {type}
      </h2>
      <div className="h-10 first:fill-red-600 relative">
        <div
          className={`h-10 w-10 bg-contain bg-blend-overlay ${colors[type].dark} ${colors[type].bgImg} rounded-full `}
        ></div>
      </div>
    </div>
  );
};

export default CategoryCard;
