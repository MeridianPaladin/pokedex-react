import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PokeCard from "../components/PokeCard";
import { getAllPokemon } from "../services/pokemonService";

const Home = ({ pokemons }) => {
  if (!pokemons) return <div>No pokemons found</div>;

  return (
    <Layout>
      <div className="p-4">
        <h1 className="mb-8 font-bold resize-text-lg">
          POKEDEX by MeridianPaladin
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
          {pokemons.map((item, index) => (
            <PokeCard data={item} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const data = await getAllPokemon();
  return {
    props: { pokemons: data },
  };
}

export default Home;
