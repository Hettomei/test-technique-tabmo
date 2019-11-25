import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Table } from "reactstrap";

import { getPokemon } from "./pokeapi.service";

const WHITE_LIST = [
  "base_experience",
  "height",
  // "id",
  // "name",
  "order",
  "weight"
  // "species",
  // "sprites",
  // "stats",
  // "types",
];

function simpleDetails(pokemon) {
  return Object.entries(pokemon).filter(([attribute]) =>
    WHITE_LIST.includes(attribute)
  );
}

export function Details() {
  const [pokemon, setPokemon] = useState(null);
  const { pokename } = useParams();

  async function fetchPokemon(pokename) {
    setPokemon(await getPokemon(pokename));
  }

  useEffect(() => {
    fetchPokemon(pokename);
  }, [pokename]);

  if (!pokemon) {
    return null;
  }

  console.log("ttiimm", pokemon);

  return (
    <Row>
      <Col xs="7">
        <h1 className="pokemon-name">{pokemon.name.toUpperCase()}</h1>

        <h2>Types</h2>
        <p>
          {pokemon.types
            .map(({ type: { name } }) => name)
            .sort()
            .join(", ")}
        </p>

        <h2>Details</h2>
        <ul>
          {simpleDetails(pokemon).map(([attr, data]) => (
            <li key={attr}>
              {attr} : {data}
            </li>
          ))}
        </ul>

        <h2>Stats</h2>
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>base state</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.stats
              .slice()
              .sort((a, b) => a.stat.name.localeCompare(b.stat.name))
              .map(({ base_stat, stat: { name } }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{base_stat}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Col>

      <Col xs="5" className="content">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </Col>
    </Row>
  );
}
