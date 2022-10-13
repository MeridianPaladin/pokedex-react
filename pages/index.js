import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PokeCard from "../components/PokeCard";
import { getAllPokemon } from "../services/pokemonService";
import PokemonSearch from "../components/PokemonSearch";
import NavegationBar from "../components/NavegationBar";

const Home = ({ pokemons }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [keyword, setKeyword] = useState("");

  const showResults = (data) => {
    setPokemonData(data);
  };

  useEffect(() => {
    setPokemonData(pokemons);
  }, [pokemons]);

  if (!pokemons) return <div>No pokemons found</div>;

  return (
    <Layout>
      <div className="p-4 dark:bg-dark1 pb-0 min-h-full">
        <NavegationBar />
        <PokemonSearch
          keyword={keyword}
          onDataChange={(value) => setKeyword(value)}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pb-12 ">
          {(keyword === ""
            ? pokemons
            : pokemons.filter((a) =>
                a.name.toLowerCase().includes(keyword.toLowerCase())
              )
          ).map((item, index) => (
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
