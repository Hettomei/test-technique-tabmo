import { createSelector } from "reselect";

const countTotal = (acc, prices) => acc + prices.length;
const sum = (acc, prices) =>
  prices.length ? acc + prices.reduce(sum, 0) : acc + prices;

export const selectTotalPokemon = createSelector(
  state => state.cart,
  cart => Object.values(cart).reduce(countTotal, 0)
);

export const selectTotalPriceInCart = createSelector(
  state => state.cart,
  cart => Object.values(cart).reduce(sum, 0)
);

export const makeSelectNumberOfPokemonsPerName = () => createSelector(
  state => state.cart,
  (_, pokemon) => pokemon.name,
  (cart, pokename) => (cart[pokename] || []).length
);
