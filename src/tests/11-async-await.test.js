//
//

import { getImagen } from "../base-pruebas/11-async-await";

describe("Pruebas en el archivo 11-async-await.js", () => {
  test("Debe devolver la URL de una imagen", async () => {
    const imagen = await getImagen();
    console.log(imagen);
    expect(typeof imagen).toBe("string");
  });
});
