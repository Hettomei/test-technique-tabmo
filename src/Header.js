import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Col, Badge } from "reactstrap";
import { Link } from "react-router-dom";

import { URLS } from "./constants";
import { selectTotalPokemon, selectTotalPriceInCart } from "./selectors/cart";

export function Header() {
  const totalPokemon = useSelector(selectTotalPokemon);
  const totalPrice = useSelector(selectTotalPriceInCart);

  return (
    <Fragment>
      <Col sm="9" xs="6">
        <h1>Tabmo - Pokeshop</h1>
      </Col>
      <Col sm="3" xs="6">
        <Badge color="primary" pill>
          <Link to={URLS.cart}>
            {totalPokemon} pokemons, {totalPrice} €
          </Link>
        </Badge>
      </Col>
    </Fragment>
  );
}
