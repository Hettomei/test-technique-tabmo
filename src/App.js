import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import { URLS } from "./constants";
import { Page404 } from "./Page404";

import { Header } from "./Header";
import { MenuLinks } from "./MenuLinks";
import { Shop } from "./Shop";
import { Details } from "./details/Details";
import { Cart } from "./Cart";

import { getAll } from "./pokeapi.service";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  async function fetchPokemons() {
    const pokemons = await getAll();
    dispatch({ type: "fetch all pokemons", pokemons });
  }

  useEffect(() => {
    fetchPokemons();
  });

  return (
    <Router>
      <Container fluid>
        <Row className="header">
          <Header />
        </Row>

        <Row>
          <Col xs="2" className="menu">
            <MenuLinks />
          </Col>

          <Col xs="10" className="content">
            <Switch>
              <Route path="/" exact component={Shop} />
              <Route path={URLS.shop} exact component={Shop} />
              <Route path={`${URLS.details}/:pokename`} component={Details} />
              <Route path={URLS.cart} exact component={Cart} />
              <Route component={Page404} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
