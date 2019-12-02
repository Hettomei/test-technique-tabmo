import { createSelector } from "reselect";

import { POKEMONS_PER_PAGE } from "../constants";

export const selectPokemon = createSelector(
  state => state.pokeapi,
  (_, pokename) => pokename,
  (pokemons, pokename) =>
    pokemons.find(pokemon => pokemon.name === pokename) || {}
);

export const selectTotal = state => state.pokeapi.length;

export const getPokemons = state => state.pokeapi;

export const searchPokemons = createSelector(
  getPokemons,
  (_, search) => search,
  (pokemons, search) => pokemons.filter(({ name }) => name.match(search))
);

export const selectPaginatedPokemons = createSelector(
  state => state,
  (_, search) => search,
  (_, __, page) => page,
  (state, search, page) =>
    searchPokemons(state, search).slice(
      (page - 1) * POKEMONS_PER_PAGE,
      page * POKEMONS_PER_PAGE
    )
);
