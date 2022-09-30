import React from "react";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import NavegationBar from "../components/NavegationBar";

const cardTypes = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

const categories = () => {
  return (
    <Layout>
      <div className="w-full  h-full p-10 dark:bg-[#2a314f] dark:text-white">
        <NavegationBar canBack backUrl="/" color="white" />
        <div className="flex flex-col items-center my-10 ">
          <h1 className="text-4xl font-bold mb-2 ">Categories</h1>
          <h2 className="font-bold text-2xl">
            What kind of Pokémon are you looking for?
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {cardTypes.map((card, index) => (
            <CategoryCard key={index} type={card} />
          ))}
        </div>
      </div>
        
    </Layout>
  );
};

export default categories;
