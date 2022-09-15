const getPokemonList = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  const data = await response.json(response);
  return data;
};

const getPokemonByUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json(response);
  return data;
};

export const getAllPokemon = async () => {
  const list = await getPokemonList();
  const pokemonsData = list.results.map(async (item) => {
    return await getPokemonByUrl(item.url);
  });
  const results = await Promise.all(pokemonsData);
  return results;
};
