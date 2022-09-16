import Layout from "../../components/Layout";
import {
  getPokemonByName,
  getPokemonSpecies,
  getPokemonGender,
} from "../../services/pokemonService";
import { colors } from "../../services/colorService";
import { toFeetInches, toPounds } from "../../services/mathService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

const PokemonPage = ({ pokemon, species }) => {
  const pokemonSpecies = species.genera.filter((a) => a.language.name === "en");
  const { female, male, genderless } = getPokemonGender(species.gender_rate);
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
            <li>About</li>
            <li>Base Stats</li>
            <li>Evolutions</li>
            <li>Moves</li>
          </ul>
        </nav>
        <table className="w-full mb-4">
          <tbody>
            <tr>
              <td width="30%" className="text-slate-500 pr-2">
                Species
              </td>
              <td>{pokemonSpecies[0].genus}</td>
            </tr>
            <tr>
              <td className="text-slate-500 pr-2">Height</td>
              <td>
                {toFeetInches(pokemon.height)} ({pokemon.height * 10} cm)
              </td>
            </tr>
            <tr>
              <td className="text-slate-500 pr-2">Weight</td>
              <td>
                {toPounds(pokemon.weight)} lbs ({pokemon.weight / 10} kg)
              </td>
            </tr>
            <tr>
              <td className="text-slate-500 pr-2">Abilities</td>
              <td>
                {pokemon.abilities.map((item, index) => (
                  <span key={index} className="capitalize">
                    {item.ability.name}
                    {index < pokemon.abilities.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-full">
          <tbody>
            <tr>
              <td colSpan={2}>
                <b>Breeding</b>
              </td>
            </tr>
            <tr>
              <td width="30%" className="text-slate-500 pr-2">
                Gender
              </td>
              {genderless ? (
                <td colSpan={2}>Genderless</td>
              ) : (
                <>
                  <td>
                    <span className="text-blue-600 mr-2">
                      <FontAwesomeIcon icon={faMars} />
                    </span>
                    {male}%
                  </td>
                  <td>
                    <span className="text-rose-500 mr-2">
                      <FontAwesomeIcon icon={faVenus} />
                    </span>
                    {female}%
                  </td>
                </>
              )}
            </tr>
            <tr>
              <td className="text-slate-500 pr-2">Egg Groups</td>
              <td colSpan={2} className="capitalize">
                {species.egg_groups[0].name}
              </td>
            </tr>
            {species.egg_groups.length > 1 && (
              <tr>
                <td className="text-slate-500 pr-2">Egg Cycle</td>
                <td colSpan={2} className="capitalize">
                  {species.egg_groups[1].name}
                </td>
              </tr>
            )}
          </tbody>
        </table>
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
