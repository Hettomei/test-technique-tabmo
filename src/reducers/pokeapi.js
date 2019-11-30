/*
 * State will look like
 *[
 * {
 *   "name":"bulbasaur",
 *   "url":"https://pokeapi.co/api/v2/pokemon/1/",
 *   "price":90,
 *   "basicInformation": { // all agregatted data from pokeapi },
 *   "species": { // all agregatted data from pokeapi/species },
 * }
 */

function addPokemonInfo(state, { basicInformation, species }) {
  const newState = [...state];

  const pokemonIndex = newState.findIndex(
    ({ name }) => name === basicInformation.name
  );

  const pokemon = newState[pokemonIndex];
  newState[pokemonIndex] = {
    ...pokemon,
    basicInformation: basicInformation,
    species: species
  };
  return newState;
}

export function pokeapi(state = [], action) {
  switch (action.type) {
    case "add-pokemon-info": {
      return addPokemonInfo(state, action);
    }
    case "fetch all pokemons": {
      return [...action.pokemons];
    }
    default:
      return state;
  }
}
