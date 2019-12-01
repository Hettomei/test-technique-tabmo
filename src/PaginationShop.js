import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function generateNumbers(n) {
  return new Array(n).fill(1).map((a, i) => i + 1);
}

export function PaginationShop({ total, perPage, page, url }) {
  return (
    <Pagination size="sm" aria-label="Page pokemon">
      <Fragment>
        {generateNumbers(Math.ceil(total / perPage)).map(i => (
          <PaginationItem active={page === i} key={i}>
            <Link to={`${url}/${i}`}>
              <PaginationLink>{i}</PaginationLink>
            </Link>
          </PaginationItem>
        ))}
      </Fragment>
    </Pagination>
  );
}
