import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import { Row, Col, Badge } from "reactstrap";

const sum = (acc, n) => acc + n;

const selectTotalInCart = createSelector(
  state => state.cart,
  cart => Object.values(cart).reduce(sum, 0)
);

export function Header() {
  const totalInCart = useSelector(selectTotalInCart);

  return (
    <Row>
      <Col xs="10">
        <h1>Tabmo - Pokeshop</h1>
      </Col>
      <Col xs="2">
        <Badge color="primary" pill>
          in cart: {totalInCart}
        </Badge>
      </Col>
    </Row>
  );
}
