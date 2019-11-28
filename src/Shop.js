import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Spinner } from "reactstrap";

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
      {pokemons.map(pokemon => (
        <ul key={pokemon.name}>
          <li>
            <Link to={`${URLS.details}/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
          <li>{pokemon.price}</li>
          <AddToCart pokemon={pokemon} />
        </ul>
      ))}
    </div>
  );
}
