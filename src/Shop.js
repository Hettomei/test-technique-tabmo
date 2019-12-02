import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spinner, Table } from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";

import { PaginationShop } from "./PaginationShop";
import { AddToCart } from "./AddToCart";

import { URLS, POKEMONS_PER_PAGE } from "./constants";
import {
  selectTotal,
  searchPokemons,
  selectPaginatedPokemons
} from "./selectors/pokeapi";

function sanitizePage({ page }, maxPage) {
  const iPage = Math.abs(Math.ceil(Number(page)));
  return Math.min(iPage || 1, maxPage);
}

export function Shop() {
  const [inputText, setInputText] = useState("");

  const total = useSelector(selectTotal);
  const totalSearch = useSelector(state => searchPokemons(state, inputText));

  const maxPage = Math.ceil(totalSearch.length / POKEMONS_PER_PAGE);
  const page = sanitizePage(useParams(), maxPage);

  const displayPokemons = useSelector(state =>
    selectPaginatedPokemons(state, inputText, page)
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
        total={totalSearch.length}
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
        total={totalSearch.length}
        perPage={POKEMONS_PER_PAGE}
        page={page}
        url={`${URLS.shop}/page`}
      />
    </div>
  );
}
