//
//

import { render } from "@testing-library/react";
import AppPropTypes from "../AppPropTypes";

describe("Pruebas en el archivo <AppPropTypes.js/> ", () => {
  test("should decir el saludo Hola, soy goku", () => {
    const saludo = "Hola, soy goku";

    // const wrapper = render(<AppPropTypes />);
    // expect(wrapper.getByText(saludo)).toBeInTheDocument();

    const { getByText } = render(<AppPropTypes saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
