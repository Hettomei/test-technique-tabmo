import mockAxios from "axios";

import { getAll } from "./pokeapi.service";

jest.mock("axios");

describe(".getAll", () => {
  beforeEach(() => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          count: 3,
          next: null,
          previous: null,
          results: [
            { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
            { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
            { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" }
          ]
        }
      })
    );
  });

  it("fetch and add price", async () => {
    expect(await getAll()).toEqual([
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        price: 90
      },
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
        price: 70
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
        price: 80
      }
    ]);
  });
});
