import React from "react";
import { colors } from "../services/colorService";
import Link from "next/link";

const PokeCard = ({ data }) => {
  return (
    <Link href={`/pokemon/${data.name}`}>
      <div
        className={`${
          colors[data.types[0].type.name].dark
        } aspect-5/3 rounded-2xl cursor-pointer`}
      >
        <div className="flex p-4 w-full h-full relative">
          <div className="w-2/5  absolute md:top-8 md:left-8">
            <h2
              className={`capitalize font-bold  ${
                colors[data.types[0].type.name].text
              } text-xl md:text-2xl lg:text-3xl xl:text-6xl mb-2`}
            >
              {data.name}
            </h2>
            {data.types.map((type, index) => (
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
          <h3
            className={`${
              colors[data.types[0].type.name].textLight
            } absolute top-3 right-3 md:top-8 md:right-8 text-sm md:text-lg lg:text-xl xl:text-3xl`}
          >
            #{data.id}
          </h3>
          <div className=" w-2/5 max-h-full absolute bottom-3 right-3 md:bottom-6 md:right-6">
            <img
              src={data.sprites.other.dream_world.front_default}
              className="aspect-square"
              alt={data.name}
            ></img>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokeCard;
