import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export function PaginationShop({ total, perPage, page, url }) {
  return (
    <Pagination aria-label="Page navigation example">
      <Fragment>
        {[1, 2, 3, 4].map(i => (
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
