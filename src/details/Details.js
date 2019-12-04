import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Row, Col } from "reactstrap";

import { AddToCart } from "../AddToCart";

import { getPokemon } from "../pokeapi.service";
import { selectPokemon } from "../selectors/pokeapi";

import { Loading } from "./Loading";
import { SimpleDetails } from "./SimpleDetails";
import { Stats } from "./Stats";
import { Sprites } from "./Sprites";

export function Details() {
  const { pokename } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector(state => selectPokemon(state, pokename));
  const { basicInformation, species } = pokemon;

  async function fetchPokemon(pokemon) {
    dispatch({
      type: "add-pokemon-info",
      ...(await getPokemon(pokemon))
    });
  }

  useEffect(() => {
    // first wait for pokemons to be downloaded, so pokemon.name works
    // then avoid downloaded when basicInformation are present
    pokemon.name && !basicInformation && fetchPokemon(pokemon);
  });

  if (!basicInformation) {
    return <Loading pokename={pokename} />;
  }

  return (
    <Fragment>
      <Row className="pokemon-detail-head">
        <Col sm="8" xs="12">
          <h1>{pokemon.name.toUpperCase()}</h1>
          <p>{species.flavor_text_entries.find(o => o.language.name === 'fr').flavor_text}</p>
        </Col>

        <Col sm="4" xs="12" className="content">
          <AddToCart pokemon={pokemon} />
          <Sprites sprites={basicInformation.sprites} name={pokemon.name} />
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <SimpleDetails pokemon={pokemon} />
          <Stats pokemon={pokemon} />
        </Col>
      </Row>
    </Fragment>
  );
}
