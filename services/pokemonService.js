export const getPokemonList = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  const data = await response.json(response);
  return data;
};

export const getPokemonByUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json(response);
  return data;
};

export const getPokemonByName = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json(response);
  return data;
};

export const getAllPokemon = async () => {
  const query = `
  query MyQuery {
    pokemon_v2_pokemon(limit: 151, offset: 0) {
      id
      name
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
  `;
  const res = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
    }),
  });
  const results = await res.json(res);
  return results.data.pokemon_v2_pokemon;
};

export const getPokemonSpecies = async (url) => {
  const response = await fetch(url);
  const data = await response.json(response);
  return data;
};

export const getPokemonGender = (rate) => {
  const genderless = rate === -1 ? true : false;
  let female = rate * 0.125 * 100;
  let male = 100 - female;
  return { female, male, genderless };
};

export const getPokemonEvolution = async (url) => {
  const response = await fetch(url);
  const data = await response.json(response);

  let chain = data.chain;
  let evolution_chain = [];

  while (chain.evolves_to.length != 0) {
    const evolution = {
      name: chain.species.name,
      id: chain.species.url.split("/").slice(-2)[0],
      evolve_to: {
        name: chain.evolves_to[0].species.name,
        id: chain.evolves_to[0].species.url.split("/").slice(-2)[0],
      },
      level: chain.evolves_to[0].evolution_details[0].min_level,
    };
    evolution_chain = [...evolution_chain, evolution];
    chain = chain.evolves_to[0];
  }

  return evolution_chain;
};
