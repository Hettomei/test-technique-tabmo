import { pokeapi } from "./pokeapi";

const store = [];

describe("reducers/pokeapi", () => {
  describe("initialstate", () => {
    it("return an object", () => {
      expect(pokeapi(undefined, { type: "@@init" })).toEqual([]);
    });
  });

  describe("fetch-all-pokemons", () => {
    it("replace all entries", () => {
      const store = [{ initial: "state" }];
      expect(
        pokeapi(store, {
          type: "fetch-all-pokemons",
          pokemons: [{ name: "pika", price: 200 }]
        })
      ).toEqual([{ name: "pika", price: 200 }]);
    });
  });

  describe("add-pokemon-info", () => {
    it("replace all entries", () => {
      const store = [{ name: "pika", price: 200 }];

      expect(
        pokeapi(store, {
          type: "add-pokemon-info",
          basicInformation: { name: "pika", some: "info" },
          species: { some: "species info" }
        })
      ).toEqual([
        {
          name: "pika",
          price: 200,
          basicInformation: { name: "pika", some: "info" },
          species: { some: "species info" }
        }
      ]);
    });
  });
});
