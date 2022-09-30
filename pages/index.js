import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PokeCard from "../components/PokeCard";
import { getAllPokemon } from "../services/pokemonService";
import PokemonSearch from "../components/PokemonSearch";

const Home = ({ pokemons }) => {
  const [pokemonData, setPokemonData] = useState([]);

  const showResults = (data) => {
    setPokemonData(data);
  };

  useEffect(() => {
    setPokemonData(pokemons);
  }, [pokemons]);

  if (!pokemons) return <div>No pokemons found</div>;
  
  return (
    <Layout>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-8 font-bold resize-text-lg">
            POKEDEX by MeridianPaladin
          </h1>
          <h1 className="text-xl font-bold">v1.0</h1>
        </div>
        <PokemonSearch
          data={pokemons}
          onDataChange={(data) => showResults(data)}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
          {pokemonData.map((item, index) => (
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
