import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";

import { Header } from "./Header";
const mockStore = configureStore([]);

describe("Header", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cart: {
        poke1: [1, 20, 300],
        poke2: [4000]
      }
    });
  });

  it("renders without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });

  it("display number and price", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    expect(wrapper.text()).toMatch("4 pokemons, 4321 €");
  });
});
