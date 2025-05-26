import { describe, test, expect } from "scripterio";

describe("API tests:", () => {
  test("[GET] - pokeapi returns correct pokemon", { timeout: 20_000 }, async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    expect(data.forms[0].name).toBeEqual("ditto");
    expect(data.id).toBeEqual(132);
  });
});
