import { createSelector } from "reselect";

const pokeapi = state => state.pokeapi;
const pokename = (_, pokename) => pokename;
const getOne = (pokemons, pokename) =>
  pokemons.find(pokemon => pokemon.name === pokename) || {};

export const selectPokemon = createSelector(pokeapi, pokename, getOne);
export const selectBasicInformation = createSelector(
  pokeapi,
  pokename,
  (pokemons, pokename) => getOne(pokemons, pokename).basicInformation
);
