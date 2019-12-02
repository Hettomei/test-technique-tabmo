import * as selector from "./pokeapi";

jest.mock("../constants", () => ({
  POKEMONS_PER_PAGE: 2
}));

const store = {
  pokeapi: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" }
  ]
};

const storeTestSearch = {
  pokeapi: [{ name: "foo1" }, { name: "foo2" }, { name: "foo3" }]
};
describe("selectors/pokeapi", () => {
  describe("selectPokemon", () => {
    it("when not found return empty object", () => {
      expect(selector.selectPokemon(store, "foo")).toEqual({});
    });

    it("when found return object", () => {
      expect(selector.selectPokemon(store, "ivysaur")).toEqual({
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/"
      });
    });
  });

  describe("selectTotal", () => {
    it("return number", () => {
      expect(selector.selectTotal(store)).toEqual(3);
    });
  });

  describe("getPokemons", () => {
    it("return number", () => {
      expect(selector.getPokemons(store)).toEqual(store.pokeapi);
    });
  });

  describe("searchPokemons", () => {
    it("when not found return empty array", () => {
      expect(selector.searchPokemons(store, "foo")).toEqual([]);
    });

    it("when found return array", () => {
      expect(selector.searchPokemons(store, "ivy")).toEqual([
        { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" }
      ]);
    });
  });

  describe("selectPaginatedPokemons", () => {
    it("when not found, return empty array", () => {
      expect(selector.selectPaginatedPokemons(store, "foo", 1)).toEqual([]);
      expect(selector.selectPaginatedPokemons(store, "foo", 2)).toEqual([]);
    });

    it("when found, return array", () => {
      expect(selector.selectPaginatedPokemons(store, "ivy", 1)).toEqual([
        { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" }
      ]);
    });

    it("when found, return paginated array", () => {
      expect(
        selector.selectPaginatedPokemons(storeTestSearch, "foo", 1)
      ).toEqual([{ name: "foo1" }, { name: "foo2" }]);

      expect(
        selector.selectPaginatedPokemons(storeTestSearch, "foo", 2)
      ).toEqual([{ name: "foo3" }]);

      expect(
        selector.selectPaginatedPokemons(storeTestSearch, "foo", 3)
      ).toEqual([]);
    });
  });
});
