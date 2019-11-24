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
        <p key={pokemon.name}>
          {pokemon.name} {pokemon.url}
        </p>
      ))}
    </div>
  );
}
