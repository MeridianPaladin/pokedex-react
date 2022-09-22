import { useState } from "react";
import Layout from "../../components/Layout";
import {
  getPokemonByName,
  getPokemonSpecies,
  getPokemonList,
  getPokemonEvolution,
} from "../../services/pokemonService";
import { colors } from "../../services/colorService";
import TabAbout from "../../components/TabAbout";
import TabStats from "../../components/TabStats";
import TabMoves from "../../components/TabMoves";
import TabEvolutions from "../../components/TabEvolutions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const PokemonPage = ({ pokemon, species, evolutions }) => {
  const [activeTab, setActiveTab] = useState(3);

  return (
    <Layout>
      <div
        className={`${
          colors[pokemon.types[0].type.name].dark
        } pokeball-bg flex flex-col items-center h-1/2 relative`}
      >
        <div className="flex  items-center w-full">
          <div className="absolute top-8 left-8">
            <Link href="/">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={`${
                  colors[pokemon.types[0].type.name].text
                } w-6 h-6 cursor-pointer`}
              />
            </Link>
          </div>
          <div className="flex flex-col absolute top-16 left-8">
            <h1
              className={` text-3xl capitalize font-bold ${
                colors[pokemon.types[0].type.name].text
              } mb-2`}
            >
              {pokemon.name}
            </h1>
            <div className="text-sm flex gap-2">
              {pokemon.types.map((type, index) => (
                <h3
                  key={index}
                  className={`${colors[type.type.name].light} ${
                    colors[type.type.name].text
                  } rounded-full  text-sm md:text-lg lg:text-xl xl:text-3xl text-center  font-bold mb-2 w-fit px-5 uper capitalize`}
                >
                  {type.type.name}
                </h3>
              ))}
            </div>
          </div>
          <div
            className={`${
              colors[pokemon.types[0].type.name].textLight
            } absolute right-8 font-bold top-8`}
          >
            #{pokemon.id}
          </div>
        </div>
        <div className="z-10 aspect-square absolute bottom-0 w-3/5 max-h-[80%]">
          <img
            className="w-full h-full mx-auto"
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>
      </div>
      <div className="bg-white p-10 pt-14  rounded-t-3xl relative -mt-8 pb-8">
        <nav className=" border-b border-gray-300  mb-5">
          <ul className="flex justify-between items-stretch">
            <li
              onClick={() => setActiveTab(1)}
              className={`border-b ${
                activeTab === 1 && "border-gray-500 font-bold"
              } cursor-pointer  w-1/3 text-center p-3  block`}
            >
              About
            </li>
            <li
              onClick={() => setActiveTab(2)}
              className={`border-b ${
                activeTab === 2 && "border-gray-500 font-bold"
              } cursor-pointer  w-1/3 text-center p-3  block`}
            >
              Base Stats
            </li>
            <li
              onClick={() => setActiveTab(3)}
              className={`border-b ${
                activeTab === 3 && "border-gray-500 font-bold"
              } cursor-pointer  w-1/3 text-center p-3  block`}
            >
              Evolutions
            </li>
          </ul>
        </nav>
        {activeTab === 1 && <TabAbout pokemon={pokemon} species={species} />}
        {activeTab === 2 && <TabStats stats={pokemon.stats} />}
        {activeTab === 3 && <TabEvolutions evolutions={evolutions} />}
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await getPokemonList();
  const paths = data.results.map((item) => ({
    params: { slug: item.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const pokemon = await getPokemonByName(slug);
  const species = await getPokemonSpecies(pokemon.species.url);
  const evolutions = await getPokemonEvolution(species.evolution_chain.url);

  return {
    props: {
      pokemon,
      species,
      evolutions,
    },
  };
}

export default PokemonPage;
