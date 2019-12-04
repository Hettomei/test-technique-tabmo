import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { AddToCart } from "./AddToCart";
const mockStore = configureStore([]);

describe("AddToCart", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      pokeapi: [
        {
          name: "poke1",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
          price: 10
        },
        {
          name: "poke2",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
          price: 100
        }
      ],
      cart: {
        poke1: [1, 20, 300]
      }
    });
  });

  it("renders without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <AddToCart pokemon={{ name: "poke1" }} />
      </Provider>
    );

    expect(wrapper).toBeTruthy();
    expect(wrapper.find(AddToCart)).toHaveLength(1);
  });

  it("display the number", () => {
    const wrapper = mount(
      <Provider store={store}>
        <AddToCart pokemon={{ name: "poke1" }} />
      </Provider>
    );

    expect(wrapper.text()).toEqual("-3+");
  });

  it("with unkow pokemon display the number", () => {
    const wrapper = mount(
      <Provider store={store}>
        <AddToCart pokemon={{ name: "foobar" }} />
      </Provider>
    );

    expect(wrapper.text()).toEqual("-0+");
  });

  it("when click on + , increment counter", () => {
    const wrapper = mount(
      <Provider store={store}>
        <AddToCart pokemon={{ name: "poke2", price: 100 }} />
      </Provider>
    );

    expect(wrapper.text()).toEqual("-0+");
    wrapper
      .find("button")
      .last()
      .simulate("click");

    expect(store.getActions()).toEqual([
      { pokemon: { name: "poke2", price: 100 }, type: "add-pokemon" }
    ]);
  });

  it("when click on - , decrement counter", () => {
    const wrapper = mount(
      <Provider store={store}>
        <AddToCart pokemon={{ name: "poke2", price: 100 }} />
      </Provider>
    );

    expect(wrapper.text()).toEqual("-0+");
    wrapper
      .find("button")
      .first()
      .simulate("click");

    expect(store.getActions()).toEqual([
      { pokemon: { name: "poke2", price: 100 }, type: "remove-pokemon" }
    ]);
  });
});
