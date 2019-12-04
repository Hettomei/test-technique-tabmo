import React, { Fragment } from "react";
import { Row, Col, Spinner } from "reactstrap";

export function Loading({ pokename }) {
  return (
    <Fragment>
      <Row className="pokemon-detail-head">
        <Col xs="9">
          <h1 className="pokemon-name">{pokename}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs="8">
          <Spinner color="primary" />
        </Col>
      </Row>
    </Fragment>
  );
}
