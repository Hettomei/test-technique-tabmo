import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";

import { Cart } from "./Cart";
const mockStore = configureStore([]);

describe("Cart", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      pokeapi: [
        { name: "poke1", price: 20 },
        { name: "poke2", price: 4000 },
        { name: "poke3", price: 300 }
      ],
      cart: {
        poke1: [20, 20, 20],
        poke2: [4000]
      }
    });
  });

  it("renders without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });

  it("display number and price", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );

    const line1 = wrapper.find("tr").at(1);

    const pokename = line1.find("td").at(0);
    const price = line1.find("td").at(1);
    const count = line1.find("td").at(2);

    expect(pokename.text()).toEqual("poke1");
    expect(price.text()).toEqual("20");
    expect(count.text()).toMatch("3");

    const line2 = wrapper.find("tr").at(2);

    const pokename2 = line2.find("td").at(0);
    const price2 = line2.find("td").at(1);
    const count2 = line2.find("td").at(2);

    expect(pokename2.text()).toEqual("poke2");
    expect(price2.text()).toEqual("4000");
    expect(count2.text()).toMatch("1");
  });
});
