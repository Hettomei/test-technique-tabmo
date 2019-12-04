import React, { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Row, Col } from "reactstrap";

import { AddToCart } from "../AddToCart";

import { getPokemon } from "../pokeapi.service";
import { selectPokemon, selectTotal } from "../selectors/pokeapi";

import { Loading } from "./Loading";
import { Error } from "./Error";
import { SimpleDetails } from "./SimpleDetails";
import { Stats } from "./Stats";
import { Sprites } from "./Sprites";

function getFrenchName({ name, species }) {
  const frName = species.names.find(({ language }) => language.name === "fr");

  return frName ? frName.name : name;
}

export function Details() {
  const [ error, setError ] = useState(null);
  const { pokename } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector(state => selectPokemon(state, pokename));
  const total = useSelector(selectTotal);
  const { basicInformation, species } = pokemon;

  async function fetchPokemon(pokemon) {
    try {
      dispatch({
        type: "add-pokemon-info",
        ...(await getPokemon(pokemon))
      });
    } catch (e) {
      console.error(e);
      setError(e);
    }
  }

  const canFetchPokemon = () => !error && total > 0 && !basicInformation;

  useEffect(() => {
    // first wait for pokemons to be downloaded, so pokemon.name works
    // then avoid downloaded when basicInformation are present
    canFetchPokemon() && fetchPokemon(pokemon);
  });

  if (error) {
    return <Error pokename={pokename} error={error} />;
  }

  if (!basicInformation) {
    return <Loading pokename={pokename} />;
  }

  return (
    <Fragment>
      <Row className="pokemon-detail-head">
        <Col sm="8" xs="12">
          <h1>{getFrenchName(pokemon)}</h1>
          <p>
            {
              species.flavor_text_entries.find(o => o.language.name === "fr")
                .flavor_text
            }
          </p>
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
