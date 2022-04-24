//
//

// import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AppDefaultProps from "../AppDefaultProps";

describe("Pruebas en el archivo <AppDefaultProps.js/> ", () => {
  //   test("should decir el saludo Hola, soy goku", () => {
  //     const saludo = "Hola, soy goku";
  //     // const wrapper = render(<AppDefaultProps />);
  //     // expect(wrapper.getByText(saludo)).toBeInTheDocument();
  //     // const { getByText } = render(<AppDefaultProps saludo={saludo} />);
  //     // expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test("should de mostrar <AppDefaultProps.js/> correctamente", () => {
    const saludo = "Hola, soy goku";
    const wrapper = shallow(<AppDefaultProps saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should de mostrar <AppDefaultProps.js/> el texto SECUNDARIO", () => {
    const saludo = "Hola, soy goku";
    const secundario = "soy un secundario";

    const wrapper = shallow(
      <AppDefaultProps saludo={saludo} secundario={secundario} />
    );

    const textoSecundario = wrapper.find("h4").text();

    expect(textoSecundario).toBe(secundario);
  });
});
