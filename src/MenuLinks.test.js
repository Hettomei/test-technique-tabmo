import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import { MenuLinks } from "./MenuLinks";

it("renders without crashing", () => {
  const menuLinks = mount(
    <Router>
      <MenuLinks />
    </Router>
  );
  expect(menuLinks).toBeTruthy();
});
