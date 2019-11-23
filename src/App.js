import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import { URLS } from "./constants";
import { Page404 } from "./Page404";

import { Header } from "./Header";
import { MenuLinks } from "./MenuLinks";
import { Shop } from "./Shop";
import { Cart } from "./Cart";

import "./App.css";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row className="header">
          <Col xs="12">
            <Header />
          </Col>
        </Row>

        <Row>
          <Col xs="3" className="menu">
            <MenuLinks />
          </Col>

          <Col xs="9" className="content">
            <Switch>
              <Route path="/" exact component={Shop} />
              <Route path={URLS.shop} exact component={Shop} />
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
