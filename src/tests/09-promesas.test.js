//

import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";
import heroes from "../data/heroes";

//
describe("Pruebas en el archivo 09-promesas.js", () => {
  test("getHeroeByIdAsync Debe de obtener el Heroe ASYNC", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("getHeroeByIdAsync Debe de obtener el mensaje del REJECT", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
