/*
 * State will look like
 *[
 * {
 *   "name":"bulbasaur",
 *   "url":"https://pokeapi.co/api/v2/pokemon/1/",
 *   "price":90,
 *   "pokemon": { // all agregatted data from pokeapi },
 *   "species": { // all agregatted data from pokeapi/species },
 * }
 */
export function pokeapi(state = [], action) {
  switch (action.type) {
    case "fetch all pokemons": {
      return [...action.pokemons];
    }
    default:
      return state;
  }
}
