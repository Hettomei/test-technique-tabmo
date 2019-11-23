import React from "react";
import { Link } from "react-router-dom";

import { URLS } from "./constants";

export function MenuLinks() {
  return (
    <nav className="shop-nav">
      <ul>
        <li>
          <Link to={URLS.shop}>Shop</Link>
        </li>
        <li>
          <Link to={URLS.cart}>My cart</Link>
        </li>
      </ul>
    </nav>
  );
}
