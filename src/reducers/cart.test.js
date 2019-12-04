import { cart } from "./cart";

const store = {};

describe("reducers/cart", () => {
  describe("initialstate", () => {
    it("return an object", () => {
      expect(cart(undefined, { type: "@@init" })).toEqual({});
    });
  });

  describe("add-pokemon", () => {
    it("create an entry", () => {
      expect(
        cart(store, {
          type: "add-pokemon",
          pokemon: {
            name: "pika",
            price: 200
          }
        })
      ).toEqual({ pika: [200] });
    });

    it("add an entry", () => {
      const action = {
        type: "add-pokemon",
        pokemon: {
          name: "pika",
          price: 200
        }
      };
      const nextStore = cart(store, action);

      expect(cart(nextStore, action)).toEqual({ pika: [200, 200] });
    });
  });

  describe("remove-pokemon", () => {
    it("when inexistant, create an entry with no prices", () => {
      expect(
        cart(store, {
          type: "remove-pokemon",
          pokemon: {
            name: "pika",
            price: 200
          }
        })
      ).toEqual({ pika: [] });
    });

    it("remove one entry", () => {
      const store = { pika: [200, 200] };
      const action = {
        type: "remove-pokemon",
        pokemon: {
          name: "pika",
          price: 200
        }
      };
      expect(cart(store, action)).toEqual({ pika: [200] });
    });
  });
});
