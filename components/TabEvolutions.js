import React from "react";
import Link from "next/link";

const TabEvolutions = ({ evolutions }) => {
  return (
    <>
      {evolutions.map((evolution, index) => (
        <div
          className="flex w-full justify-between mb-8 items-center"
          key={index}
        >
          <Link href={`/pokemon/${evolution.name}`}>
            <div className="text-center  cursor-pointer">
              <div className=" w-16 relative">
                <img
                  className="aspect-square mx-auto "
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolution.id}.svg`}
                ></img>
              </div>
              <div className="capitalize font-bold">{evolution.name}</div>
            </div>
          </Link>
          <div>Lvl. {evolution.level}</div>
          <Link href={`/pokemon/${evolution.evolve_to.name}`}>
            <div className="text-center cursor-pointer">
              <div className=" w-16 relative">
                <img
                  className="aspect-square mx-auto "
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolution.evolve_to.id}.svg`}
                ></img>
              </div>
              <div className="capitalize font-bold">
                {evolution.evolve_to.name}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TabEvolutions;
