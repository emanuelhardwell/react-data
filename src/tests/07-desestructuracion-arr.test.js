import { retornaArreglo } from "../base-pruebas/07-deses-arr";

describe("Pruebas en el archivo 07-desestructuracion-arr.js", () => {
  test("Debe retornaArreglo", () => {
    const arreglo = retornaArreglo();
    const [letra, numero] = retornaArreglo(); //"ABC", 123

    expect(arreglo).toEqual(["ABC", 123]);

    console.log(typeof letra);

    expect(letra).toBe("ABC");
    expect(typeof letra).toBe("string");

    expect(numero).toBe(123);
    expect(typeof numero).toBe("number");
  });
});
