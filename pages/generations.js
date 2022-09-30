import React from "react";
import GenerationCard from "../components/GenerationCard";
import Layout from "../components/Layout";
import NavegationBar from "../components/NavegationBar";

const generationsData = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

const Generations = () => {
  return (
    <Layout>
      <div className="w-full  h-full p-10 dark:bg-[#2a314f] dark:text-white">
        <NavegationBar canBack backUrl="/" color="white" />
        <div className="flex flex-col items-center my-10 ">
          <h1 className="text-4xl font-bold mb-2 ">Generations</h1>
          <h2 className="font-bold text-2xl">
            What generation of Pokémon are you looking for?
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {generationsData.map((generation, index) => (
            <GenerationCard
              key={index}
              generation={generation}
              id={index + 1}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Generations;
