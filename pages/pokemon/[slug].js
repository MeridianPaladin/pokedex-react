import { useState } from "react";
import Layout from "../../components/Layout";
import {
  getPokemonByName,
  getPokemonSpecies,
} from "../../services/pokemonService";
import { colors } from "../../services/colorService";
import TabAbout from "../../components/TabAbout";
import TabStats from "../../components/TabStats";
import TabMoves from "../../components/TabMoves";
import TabEvolutions from "../../components/TabEvolutions";

const PokemonPage = ({ pokemon, species }) => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <Layout>
      <div
        className={`${
          colors[pokemon.types[0].type.name].dark
        } pokeball-bg flex flex-col items-center h-1/2 relative`}
      >
        <div className="flex  items-center w-full">
          <div className="flex flex-col absolute top-8 left-8">
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
        <nav className=" border-b gray-500 pb-5 mb-5">
          <ul className="flex justify-between">
            <li onClick={() => setActiveTab(1)}>About</li>
            <li onClick={() => setActiveTab(2)}>Base Stats</li>
            <li onClick={() => setActiveTab(3)}>Evolutions</li>
            <li onClick={() => setActiveTab(4)}>Moves</li>
          </ul>
        </nav>
        {activeTab === 1 && <TabAbout pokemon={pokemon} species={species} />}
        {activeTab === 2 && <TabStats stats={pokemon.stats}/>}
        {activeTab === 3 && <TabEvolutions />}
        {activeTab === 4 && <TabMoves />}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const pokemon = await getPokemonByName(slug);
  const species = await getPokemonSpecies(pokemon.species.url);

  return {
    props: {
      pokemon,
      species,
    },
  };
}

export default PokemonPage;
