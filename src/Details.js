import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Row, Col, Table, Spinner } from "reactstrap";

import { AddToCart } from "./AddToCart";

import { getPokemon } from "./pokeapi.service";
import { selectPokemon, selectBasicInformation } from "./selectors/pokeapi";

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
  const { pokename } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector(state => selectPokemon(state, pokename));
  const basicInformation = useSelector(state => selectBasicInformation(state, pokename));

  async function fetchPokemon(pokename) {
    dispatch({
      type: "add-pokemon-info",
      ...(await getPokemon(pokename))
    });
  }

  useEffect(() => {
    pokemon.name && !basicInformation && fetchPokemon(pokename);
  });

  if (!basicInformation) {
    return (
      <Row>
        <Col xs="7">
          <h1 className="pokemon-name">{pokename.toUpperCase()}</h1>
          <Spinner color="primary" />
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col xs="7">
        <h1 className="pokemon-name">{pokemon.name.toUpperCase()}</h1>
        <AddToCart pokemon={pokemon} />

        <h2>Types</h2>
        <p>
          {basicInformation.types
            .map(({ type: { name } }) => name)
            .sort()
            .join(", ")}
        </p>

        <h2>Details</h2>
        <ul>
          {simpleDetails(basicInformation).map(([attr, data]) => (
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
            {basicInformation.stats
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
        <img src={basicInformation.sprites.front_default} alt={basicInformation.name} />
      </Col>
    </Row>
  );
}
