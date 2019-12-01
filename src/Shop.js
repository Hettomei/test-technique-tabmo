import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Spinner, Table } from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";

import { PaginationShop } from "./PaginationShop";
import { AddToCart } from "./AddToCart";

import { URLS, POKEMONS_PER_PAGE } from "./constants";

const searchPokemons = search => state =>
  state.pokeapi.filter(({ name }) => name.match(search));

const selectDisaplayedPokemons = (page, search) =>
  createSelector(searchPokemons(search), pokemons =>
    pokemons.slice((page - 1) * POKEMONS_PER_PAGE, page * POKEMONS_PER_PAGE)
  );

function sanitizePage({ page }, maxPage) {
  const iPage = Math.abs(Math.ceil(Number(page)));
  return Math.min(iPage || 1, maxPage);
}

export function Shop() {
  const [inputText, setInputText] = useState("");

  const total = useSelector(state => state.pokeapi.length);
  const totalSearch = useSelector(searchPokemons(inputText)).length;
  const maxPage = Math.ceil(totalSearch / POKEMONS_PER_PAGE);
  const page = sanitizePage(useParams(), maxPage);
  const displayPokemons = useSelector(
    selectDisaplayedPokemons(page, inputText)
  );

  if (total === 0) {
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
      <Form>
        <FormGroup>
          <Input
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Search"
          />
        </FormGroup>
      </Form>

      <PaginationShop
        total={totalSearch}
        perPage={POKEMONS_PER_PAGE}
        page={page}
        url={`${URLS.shop}/page`}
      />

      <Table hover responsive>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>add to cart</th>
          </tr>
        </thead>
        <tbody>
          {displayPokemons.map(pokemon => (
            <tr key={pokemon.name}>
              <td>
                <Link to={`${URLS.details}/${pokemon.name}`}>
                  {pokemon.name}
                </Link>
              </td>
              <td>{pokemon.price}</td>
              <td>
                <AddToCart pokemon={pokemon} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationShop
        total={totalSearch}
        perPage={POKEMONS_PER_PAGE}
        page={page}
        url={`${URLS.shop}/page`}
      />
    </div>
  );
}
