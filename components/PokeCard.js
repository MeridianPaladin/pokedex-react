import React from "react";
import { colors } from "../services/colorService";
import Link from "next/link";

const PokeCard = ({ data }) => {
  const sprites = JSON.parse(data.pokemon_v2_pokemonsprites[0].sprites);

  return (
    <Link href={`/pokemon/${data.name}`}>
      <div id={data.name}
        className={`${
          colors[data.pokemon_v2_pokemontypes[0].pokemon_v2_type.name].dark
        } aspect-5/3 rounded-2xl cursor-pointer pokeball-bg`}
      >
        <div className="flex flex-col justify-between p-3 md:p-4 w-full h-full relative">
          <div className="w-full flex justify-between items-center mb-2">
            <h2
              className={`capitalize font-bold leading-none ${
                colors[data.pokemon_v2_pokemontypes[0].pokemon_v2_type.name]
                  .text
              } text-xl md:text-2xl lg:text-3xl xl:text-6xl`}
            >
              {data.name}
            </h2>
            <h3
              className={`${
                colors[data.pokemon_v2_pokemontypes[0].pokemon_v2_type.name]
                  .textLight
              } text-sm md:text-lg lg:text-xl xl:text-3xl`}
            >
              #{data.id}
            </h3>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-1 md:gap-2 w-3/5">
              {data.pokemon_v2_pokemontypes.map((type, index) => (
                <h3
                  key={index}
                  className={`${colors[type.pokemon_v2_type.name].light} ${
                    colors[type.pokemon_v2_type.name].text
                  } rounded-full  text-xs md:text-lg lg:text-xl xl:text-3xl text-center  font-bold  w-fit px-3 md:px-5  capitalize`}
                >
                  {type.pokemon_v2_type.name}
                </h3>
              ))}
            </div>

            <div className=" w-2/5 aspect-square">
              <img
                src={sprites.other.dream_world.front_default}
                className="w-full h-full"
                alt={data.name}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokeCard;
