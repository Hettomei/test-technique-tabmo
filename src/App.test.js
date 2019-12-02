import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import App from "./App";
import { buildStore } from "./configureStore";
import { Shop } from "./Shop";

jest.mock("./Shop", () => ({
  Shop: () => <div id="shop" />
}));

jest.mock("./pokeapi.service", () => ({
  getAll: () => [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      price: 90
    }
  ]
}));

it("renders without crashing", () => {
  const wrapper = mount(
    <Provider store={buildStore()}>
      <App />
    </Provider>
  );

  expect(wrapper).toBeTruthy();
  expect(wrapper.find(Shop)).toHaveLength(1);
});
