//
//
describe("Pruebas en el archivo DEMO", () => {
  test("Deben ser palabras iguales", () => {
    const palabra1 = "Hola mundo";
    const palabra2 = `Hola mundo`;

    expect(palabra1).toBe(palabra2);
  });
});
