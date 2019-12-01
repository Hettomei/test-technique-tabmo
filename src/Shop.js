import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Spinner, Table } from "reactstrap";

import { PaginationShop } from "./PaginationShop";
import { AddToCart } from "./AddToCart";

import { URLS, POKEMONS_PER_PAGE } from "./constants";

const selectPokemons = page =>
  createSelector(
    state => state.pokeapi,
    pokemons =>
      pokemons.slice((page - 1) * POKEMONS_PER_PAGE, page * POKEMONS_PER_PAGE)
  );

function sanitizePage({ page }) {
  const iPage = Math.abs(Math.ceil(Number(page)));
  return iPage || 1;
}

export function Shop() {
  const page = sanitizePage(useParams());
  const pokemons = useSelector(selectPokemons(page));

  if (pokemons.length === 0) {
    return (
      <div>
        <h1>Pokemons</h1>
        <Spinner color="primary" />
      </div>
    );
  }
  console.log('ttiimm', 'render');

  return (
    <div>
      <h1>Pokemons {page}</h1>

      <PaginationShop
        total={pokemons.length}
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
          {pokemons.map(pokemon => (
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
      <PaginationShop />
    </div>
  );
}
