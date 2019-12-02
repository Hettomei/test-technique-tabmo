import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Col, Badge } from "reactstrap";

import { selectTotalPokemon, selectTotalPriceInCart } from "./selectors/cart";

export function Header() {
  const totalPokemon = useSelector(selectTotalPokemon);
  const totalPrice = useSelector(selectTotalPriceInCart);

  return (
    <Fragment>
      <Col xs="10">
        <h1>Tabmo - Pokeshop</h1>
      </Col>
      <Col xs="2">
        <Badge color="primary" pill>
          {totalPokemon} pokemons, {totalPrice} €
        </Badge>
      </Col>
    </Fragment>
  );
}
