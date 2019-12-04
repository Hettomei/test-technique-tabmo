import * as selector from "./cart";

const store = {
  cart: {
    poke1: [1, 20, 300],
    poke2: [5000]
  }
};

describe("selectors/cart", () => {
  describe("selectTotalPokemon", () => {
    it("return a number", () => {
      expect(selector.selectTotalPokemon(store)).toEqual(4);
      expect(selector.selectTotalPokemon({ cart: {} })).toEqual(0);
    });
  });

  describe("selectTotalPriceInCart", () => {
    it("return a number", () => {
      expect(selector.selectTotalPriceInCart(store)).toEqual(5321);
      expect(selector.selectTotalPriceInCart({ cart: {} })).toEqual(0);
    });
  });

  describe("makeSelectNumberOfPokemonsPerName", () => {
    it("return a selector", () => {
      const selectNumberOfPokemonsPerName = selector.makeSelectNumberOfPokemonsPerName();
      expect(selectNumberOfPokemonsPerName(store, { name: "poke1" })).toEqual(
        3
      );
      expect(
        selectNumberOfPokemonsPerName({ cart: {} }, { name: "poke1" })
      ).toEqual(0);
    });
  });

  describe("cartToSortedArray", () => {
    it("return an array", () => {
      const store = {
        cart: {
          zzzz: [100],
          aaa: [5000],
          zzz: [100]
        },
        pokeapi: [
          { name: "zzz", price: 1 },
          { name: "zzzz", price: 20 },
          { name: "aaa", price: 300 }
        ]
      };
      expect(selector.cartToSortedArray(store)).toEqual([
        { name: "aaa", price: 300 },
        { name: "zzz", price: 1 },
        { name: "zzzz", price: 20 }
      ]);
    });
  });
});
