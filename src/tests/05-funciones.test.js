//

import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";

//
describe("Pruebas en el archivo 05-funciones.js", () => {
  test("getUser debe devolver un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe devolver un UsuarioActivo", () => {
    const nombre = "emanuel";

    const userTest = {
      uid: "ABC567",
      username: "emanuel",
    };

    const user = getUsuarioActivo(nombre);

    expect(user).toEqual(userTest);
  });
});
