import React from "react";

const GenerationCard = ({ generation, id }) => {
  return (
    <div className="flex flex-col justify-center bg-gray-300 dark:bg-dark2 p-4 pb-0 items-center rounded-lg dark:text-white">
      <p className="font-bold">Generation {generation}</p>
      <div className="h-32">
        <img src={`/img/gen-${id}.png`} className="h-full" />
      </div>
    </div>
  );
};

export default GenerationCard;
