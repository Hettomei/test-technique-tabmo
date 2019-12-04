import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import { PaginationShop } from "./PaginationShop";

describe("PaginationShop", () => {
  describe("with one page", () => {
    it("display pages", () => {
      const wrapper = mount(
        <Router>
          <PaginationShop total="1" perPage="1" page="1" url="/path" />
        </Router>
      );
      expect(wrapper.text()).toEqual("1");
    });
  });

  describe("with various page", () => {
    it("display pages", () => {
      const wrapper = mount(
        <Router>
          <PaginationShop total="85" perPage="10" page="5" url="/path" />
        </Router>
      );
      expect(wrapper.text()).toEqual("123456789");
      expect(wrapper.html()).toMatch('a href="/path/9"');
    });
  });
});
