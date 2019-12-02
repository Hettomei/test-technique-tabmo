import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import App from "./App";
import { buildStore } from "./configureStore";

jest.mock("./Shop", () => ({
  Shop: () => <div id="shop" />
}));

it("renders without crashing", () => {
  const render = mount(
    <Provider store={buildStore()}>
      <App />
    </Provider>
  );

  expect(render).toBeTruthy();
});
