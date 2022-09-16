import React from "react";
import { toFeetInches, toPounds } from "../services/mathService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../services/colorService";
import { getPokemonGender } from "../services/pokemonService";

const TabAbout = ({ pokemon, species }) => {
  const pokemonSpecies = species.genera.filter((a) => a.language.name === "en");
  const { female, male, genderless } = getPokemonGender(species.gender_rate);
  
  return (
    <div>
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
  );
};

export default TabAbout;
