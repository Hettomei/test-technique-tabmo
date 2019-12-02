import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Badge } from "reactstrap";

import { makeSelectNumberOfPokemonsPerName } from "./selectors/cart";

export function AddToCart({ pokemon }) {
  const dispatch = useDispatch();
  const selectNumberOfPokemonsPerName = useMemo(makeSelectNumberOfPokemonsPerName, [pokemon]);
  const count = useSelector(state =>
    selectNumberOfPokemonsPerName(state, pokemon)
  );

  const addToCart = pokemon => event =>
    dispatch({ type: "add-pokemon", pokemon });

  const removeFromCart = pokemon => event =>
    dispatch({ type: "remove-pokemon", pokemon });

  return (
    <div className="add-to-cart">
      <Button color="info" onClick={removeFromCart(pokemon)}>
        -
      </Button>
      <Badge color="" pill>
        {count}
      </Badge>
      <Button color="info" onClick={addToCart(pokemon)}>
        +
      </Button>
    </div>
  );
}
