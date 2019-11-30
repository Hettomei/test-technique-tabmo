import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Spinner, Table } from "reactstrap";

import { AddToCart } from "./AddToCart";

import { URLS } from "./constants";

const selectPokemons = createSelector(
  state => state.pokeapi,
  pokemons => pokemons.slice(0, 10)
);

export function Shop() {
  const pokemons = useSelector(selectPokemons);

  if (pokemons.length === 0) {
    return (
      <div>
        <h1>Pokemons</h1>
        <Spinner color="primary" />
      </div>
    );
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <Table stripped hover responsive>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>add to cart</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map(pokemon => (
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
