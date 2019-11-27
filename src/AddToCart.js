import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Button, Badge } from "reactstrap";

const makeNumOfPokemonWithNameSelector = () =>
  createSelector(
    state => state.cart,
    (_, pokemon) => pokemon.name,
    (cart, pokename) => (cart[pokename] || []).length
  );

export function AddToCart({ pokemon }) {
  const dispatch = useDispatch();
  const selectNumOfPokemonWithName = useMemo(
    makeNumOfPokemonWithNameSelector,
    []
  );

  const addToCart = pokemon => event =>
    dispatch({ type: "add-pokemon", pokemon });

  const removeFromCart = pokemon => event =>
    dispatch({ type: "remove-pokemon", pokemon });

  const count = useSelector(state =>
    selectNumOfPokemonWithName(state, pokemon)
  );

  return (
    <div className="add-to-cart">
      <Button color="info" onClick={addToCart(pokemon)}>
        +
      </Button>
      <Badge color="" pill>
        {count}
      </Badge>
      <Button color="info" onClick={removeFromCart(pokemon)}>
        -
      </Button>
    </div>
  );
}
