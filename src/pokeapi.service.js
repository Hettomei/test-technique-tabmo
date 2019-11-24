import axios from "axios";
import fakePokemons from "./fakeData/pokemons.json";

const BASE_URL = "https://pokeapi.co/api/v2";

// convert [{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}, ....]
// into
// {
//   bulbasaur: { name: "bulbasaur", "url":"https://pokeapi.co/api/v2/pokemon/1/" },
//   pikachu: {...}
//   ....
// }
function toObject(data) {
  return data.reduce(
    (acc, pokemon) => ({ ...acc, [pokemon.name]: pokemon }),
    {}
  );
}

// export async function getAll() {
//   try {
//     const data = await axios.get(`${BASE_URL}/pokemon`, {
//       params: {
//         offset: 0,
//         limit: 2000,
//       }
//     });
//     return data.data.results;
//     // return data.results;
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function getAll() {
  return Promise.resolve(fakePokemons.results);
}
