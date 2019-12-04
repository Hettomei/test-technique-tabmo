import { createSelector } from "reselect";

import { selectPokemon } from "./pokeapi";

const countTotal = (acc, prices) => acc + prices.length;
const sum = (acc, prices) =>
  Array.isArray(prices) ? acc + prices.reduce(sum, 0) : acc + prices;

export const selectTotalPokemon = createSelector(
  state => state.cart,
  cart => Object.values(cart).reduce(countTotal, 0)
);

export const selectTotalPriceInCart = createSelector(
  state => state.cart,
  cart => Object.values(cart).reduce(sum, 0)
);

export const makeSelectNumberOfPokemonsPerName = () =>
  createSelector(
    state => state.cart,
    (_, pokemon) => pokemon.name,
    (cart, pokename) => (cart[pokename] || []).length
  );

export const cartToSortedArray = createSelector(
  state => state.cart,
  state => state,
  (cart, state) =>
    Object.entries(cart)
      .sort(([aName], [bName]) => aName.localeCompare(bName))
      .map(([name]) => selectPokemon(state, name))
);
