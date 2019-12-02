import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import { buildStore } from "./configureStore";

import { Header } from "./Header";

it("renders without crashing", () => {
  const cart = mount(
    <Provider store={buildStore()}>
      <Header />
    </Provider>
  );
  expect(cart).toBeTruthy();
});
