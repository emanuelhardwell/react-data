import heroes from "../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";
console.log(heroes);

describe("Pruebas en el archivo 08-imp-exp.js", () => {
  test("Debe devolver el HEROE buscado por ID", () => {
    const id = 1;
    const heroeSearch = getHeroeById(id);
    console.log(heroeSearch);

    const heroeData = heroes.find((heroe) => heroe.id === id);
    console.log(".........." + heroeData);
    expect(heroeData).toEqual(heroeSearch);
  });

  test("Debe devolver UNDEFINED si el HEROE buscado por ID NO EXISTE", () => {
    const id = 10;
    const heroeSearch = getHeroeById(id);
    console.log(heroeSearch);

    expect(heroeSearch).toBe(undefined);
  });

  //   debe de retornar un arreglo con los heroes de DC
  // toEqual al arreglo filtrado
  test("debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const ownerSearch = getHeroesByOwner(owner);
    console.log(ownerSearch);

    const ownerData = heroes.filter((heroe) => heroe.owner === owner);
    console.log(ownerData);

    expect(ownerSearch).toEqual(ownerData);
  });

  // debe de retornar un arreglo con los heroes de Marvel
  // lenght = 2 // toBe
  test("debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const ownerSearch = getHeroesByOwner(owner);
    console.log(ownerSearch);

    const ownerData = heroes.filter((heroe) => heroe.owner === owner);
    console.log(ownerData);

    expect(ownerSearch).toEqual(ownerData);
    expect(ownerSearch.length).toBe(2);
  });
});
