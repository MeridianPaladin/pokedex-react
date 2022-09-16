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

export const getPokemonByName = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
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
