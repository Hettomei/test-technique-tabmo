import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import { AddToCart } from "./AddToCart";

import { URLS } from "./constants";

const selectPokemons = createSelector(
  state => state.pokeapi,
  pokemons => pokemons.slice(0, 10)
);

export function Shop() {
  const pokemons = useSelector(selectPokemons);

  return (
    <div>
      <h1>Pokemons</h1>
      {pokemons.map(pokemon => (
        <ul key={pokemon.name}>
          <li>
            <Link to={`${URLS.details}/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
          <li>{pokemon.price}</li>
          <AddToCart pokename={pokemon.name} />
        </ul>
      ))}
    </div>
  );
}
