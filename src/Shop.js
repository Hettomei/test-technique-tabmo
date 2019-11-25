import React, { useState, useEffect } from "react";
import { getAll } from "./pokeapi.service";

export function Shop() {
  const [pokemons, setPokemons] = useState([]);

  async function fetchPokemons() {
    setPokemons(await getAll());
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokemons</h1>
      {pokemons.map(pokemon => (
        <ul key={pokemon.name}>
          <li>{pokemon.name}</li>
          <li>{pokemon.price}</li>
        </ul>
      ))}
    </div>
  );
}
