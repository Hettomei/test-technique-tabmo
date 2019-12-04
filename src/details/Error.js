import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { URLS } from "../constants";

export function Error({ pokename }) {
  return (
    <Row className="pokemon-detail-head">
      <Col xs="12">
        <h1>{pokename}</h1>
        <p>Sorry, we cannot find {pokename} details.</p>
        <p>
          You can go back to <Link to={URLS.shop}>Shop</Link>
        </p>
      </Col>
    </Row>
  );
}
