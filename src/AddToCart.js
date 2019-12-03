import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Badge } from "reactstrap";

import { makeSelectNumberOfPokemonsPerName } from "./selectors/cart";

export function AddToCart({ pokemon }) {
  const dispatch = useDispatch();
  const selectNumberOfPokemonsPerName = useMemo(makeSelectNumberOfPokemonsPerName, []);
  const count = useSelector(state =>
    selectNumberOfPokemonsPerName(state, pokemon)
  );

  const addToCart = event => dispatch({ type: "add-pokemon", pokemon });
  const removeFromCart = event => dispatch({ type: "remove-pokemon", pokemon });

  return (
    <div className="add-to-cart">
      <Button color="info" onClick={removeFromCart}>
        -
      </Button>
      <Badge color="" pill>
        {count}
      </Badge>
      <Button color="info" onClick={addToCart}>
        +
      </Button>
    </div>
  );
}
