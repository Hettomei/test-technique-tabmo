import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Button, Badge } from "reactstrap";

const makeNumOfPokemonWithNameSelector = () =>
  createSelector(
    state => state.cart,
    (_, pokename) => pokename,
    (cart, pokename) => cart[pokename] || 0
  );

export function AddToCart({ pokename }) {
  const dispatch = useDispatch();
  const selectNumOfPokemonWithName = useMemo(
    makeNumOfPokemonWithNameSelector,
    []
  );

  const addToCart = pokename => event =>
    dispatch({ type: "add-pokemon", pokename });

  const removeFromCart = pokename => event =>
    dispatch({ type: "remove-pokemon", pokename });

  const count = useSelector(state =>
    selectNumOfPokemonWithName(state, pokename)
  );

  return (
    <div className="add-to-cart">
      <Button color="info" onClick={addToCart(pokename)}>
        +
      </Button>
      <Badge color="" pill>
        {count}
      </Badge>
      <Button color="info" onClick={removeFromCart(pokename)}>
        -
      </Button>
    </div>
  );
}
