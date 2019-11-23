import React from "react";
import { Link } from "react-router-dom";

import { URLS } from "./constants";

export function Page404() {
  return (
    <div>
      <h1>Page404</h1>
      <p>
        You can go back to <Link to={URLS.shop}>Shop</Link>
      </p>
    </div>
  );
}
