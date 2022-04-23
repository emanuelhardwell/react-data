import { getSaludo } from "../base-pruebas/02-template-string";

describe("Pruebas en el archivo 02-template-string.js", () => {
  test("getSaludo debe decir hola fernando!", () => {
    const nombre = "Fernando";

    const saludo = getSaludo(nombre);
    console.log(saludo);

    expect(saludo).toBe("Hola " + nombre + "!");
  });

  // getSaludo debe retornar Hola carlos! ... Si no hay argumentos
  test("getSaludo debe decir hola Carlos!", () => {
    const nombre = "Carlos";

    const saludo = getSaludo();
    console.log(saludo);

    expect(saludo).toBe("Hola " + nombre + "!");
  });
});
