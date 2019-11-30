import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import { Col, Badge } from "reactstrap";

const countTotal = (acc, prices) => acc + prices.length;
const sumPrices = (acc, prices) => acc + prices.length * (prices[0] || 0);

const selectTotalInCart = createSelector(
  state => state.cart,
  cart => Object.values(cart).reduce(countTotal, 0)
);

const selectTotalPriceInCart = createSelector(
  state => state.cart,
  state => state.pokeapi,
  (cart, pokemons) => Object.values(cart).reduce(sumPrices, 0)
);

export function Header() {
  const totalInCart = useSelector(selectTotalInCart);
  const totalPrice = useSelector(selectTotalPriceInCart);

  return (
    <Fragment>
      <Col xs="10">
        <h1>Tabmo - Pokeshop</h1>
      </Col>
      <Col xs="2">
        <Badge color="primary" pill>
          {totalInCart} pokemons, {totalPrice} €
        </Badge>
      </Col>
    </Fragment>
  );
}
