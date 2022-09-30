import React from "react";
import CategoryCard from "../../components/CategoryCard";
import Layout from "../../components/Layout";

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
      <div className="w-full  h-full p-10">
        <div className="flex justify-center my-10">
          <h1 className="font-bold text-2xl">
            What kind of Pokémon are you looking for?
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {cardTypes.map((card, index) => (
            <CategoryCard key={index} type={card}/>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default categories;
