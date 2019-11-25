import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPokemon } from "./pokeapi.service";

export function Details() {
  const [pokemon, setPokemon] = useState(null);
  const { pokename } = useParams();

  async function fetchPokemon() {
    setPokemon(await getPokemon());
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <div>
      <h1>Pokemon {pokemon.name} {pokename}</h1>
      <ul>
        {Object.entries(pokemon).map(([attr, data]) => (
          <li key={attr}>
            {attr} : {data}
          </li>
        ))}
      </ul>
    </div>
  );
}
