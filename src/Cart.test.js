import React from "react";
import { mount } from "enzyme";
import { Cart } from "./Cart";

it("renders without crashing", () => {
  const cart = mount(<Cart />);
  expect(cart).toBeTruthy();
});

