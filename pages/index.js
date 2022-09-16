import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PokeCard from "../components/PokeCard";
import { getAllPokemon } from "../services/pokemonService";

export default function Home() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPokemon();
      setPokemons(data)
      // console.log(data)
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="p-6">
        <h1 className="mb-8 font-bold resize-text-lg">Pokedex</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {pokemons.map((item, index) => (
            <PokeCard data={item} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
