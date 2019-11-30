import axios from "axios";
import fakePokemons from "./fakeData/pokemons.json";

const BASE_URL = "https://pokeapi.co/api/v2";

function addPrice(pokemon) {
  return { ...pokemon, price: pokemon.name.length * 10 };
}

export async function getAll() {
  // TODO : remove this if when goes in production
  if (process.env.NODE_ENV === "development") {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(2000);
    return fakePokemons.results.map(addPrice);
  }

  const request = await axios.get(`${BASE_URL}/pokemon`, {
    params: {
      offset: 0,
      limit: 2000
    }
  });
  return request.data.results.map(addPrice);
}

export async function getPokemon(name) {
  const requestBasicInformation = axios.get(`${BASE_URL}/pokemon/${name}`);
  const requestSpecies = axios.get(`${BASE_URL}/pokemon-species/${name}`);
  // Merge request with species and color when this one is complete
  return {
    basicInformation: (await requestBasicInformation).data,
    species: (await requestSpecies).data
  };
}
