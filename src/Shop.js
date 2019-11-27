import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AddToCart } from "./AddToCart";

import { URLS } from "./constants";
import { getAll } from "./pokeapi.service";

export function Shop() {
  const [pokemons, setPokemons] = useState([]);

  async function fetchPokemons() {
    const all = await getAll();
    setPokemons(all.slice(0, 10));
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

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
