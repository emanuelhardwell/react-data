//
//

// import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AppPropTypes from "../AppPropTypes";

describe("Pruebas en el archivo <AppPropTypes.js/> ", () => {
  //   test("should decir el saludo Hola, soy goku", () => {
  //     const saludo = "Hola, soy goku";
  //     // const wrapper = render(<AppPropTypes />);
  //     // expect(wrapper.getByText(saludo)).toBeInTheDocument();
  //     // const { getByText } = render(<AppPropTypes saludo={saludo} />);
  //     // expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test("should de mostrar <AppPropTypes.js/> correctamente", () => {
    const saludo = "Hola, soy goku";
    const wrapper = shallow(<AppPropTypes saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
});
