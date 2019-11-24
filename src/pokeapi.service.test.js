import mockAxios from "axios";

import { getAll } from "./pokeapi.service";

jest.mock("axios");

describe(".getAll", () => {
  beforeEach(() => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        count: 3,
        next: null,
        previous: null,
        results: [
          { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
          { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
          { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" }
        ]
      })
    );
  });

  // it("fetch and convert to object and add price", async () => {
  //   expect(await getAll()).toEqual({
  //     bulbasaur: {
  //       name: "bulbasaur",
  //       url: "https://pokeapi.co/api/v2/pokemon/1/"
  //     },
  //     ivysaur: { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  //     venusaur: {
  //       name: "venusaur",
  //       url: "https://pokeapi.co/api/v2/pokemon/3/"
  //     }
  //   });
  // });
});
