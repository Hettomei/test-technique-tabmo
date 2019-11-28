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
export function pokeapi(state = [], action) {
  switch (action.type) {
    case "add-pokemon-info": {
      const { basicInformation, species } = action;
      const newState = [...state];
      const pokemon = newState.find(({name}) => name === basicInformation.name);
      pokemon.basicInformation = basicInformation;
      pokemon.species = species;
      return newState;
    }
    case "fetch all pokemons": {
      return [...action.pokemons];
    }
    default:
      return state;
  }
}
