import axios from "axios";
import fakePokemons from "./fakeData/pokemons.json";

const BASE_URL = "https://pokeapi.co/api/v2";

function addPrice(pokemon) {
  return { ...pokemon, price: pokemon.name.length * 10 };
}

export async function getAll() {
  // TODO : remove this if when goes in production
  if (process.env.NODE_ENV === "development") {
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
