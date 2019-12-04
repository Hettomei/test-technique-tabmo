import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

import { AddToCart } from "./AddToCart";
import { URLS } from "./constants";
import { cartToSortedArray } from "./selectors/cart";

export function Cart() {
  const pokemonsInCart = useSelector(cartToSortedArray);

  return (
    <div>
      <h1>My cart</h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>add to cart</th>
          </tr>
        </thead>
        <tbody>
          {pokemonsInCart.map(pokemon => (
            <tr key={pokemon.name}>
              <td>
                <Link to={`${URLS.details}/${pokemon.name}`}>
                  {pokemon.name}
                </Link>
              </td>
              <td>{pokemon.price}</td>
              <td>
                <AddToCart pokemon={pokemon} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
