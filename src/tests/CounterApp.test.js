//  1.- crear las siguientes pruebas para el <CounterApp/>
//  debe de mostrar <CounterApp/> correctamente (hacer match con un snapshot)
//  y sus valores por defecto

import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

// Debe de mostrar el valor por defecto de 100
// usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
describe("Pruebas en el archivo CounterApp.js", () => {
  test("should hacer match el sanpshot", () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test(" Debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const res = wrapper.find("h3").text().trim();
    expect(res).toBe("100");
  });

  //   prueba con los botones suma, resta, reset
  test("Debe de simular el boton +1", () => {
    const wrapper = shallow(<CounterApp />);
    wrapper.find("button").at(0).simulate("click");

    const res = wrapper.find("h3").text().trim();

    expect(res).toBe("11");
  });

  test("Debe de simular el boton -1", () => {
    const wrapper = shallow(<CounterApp />);
    wrapper.find("button").at(1).simulate("click");

    const res = wrapper.find("h3").text().trim();

    expect(res).toBe("9");
  });

  test("Debe de simular el boton RESET", () => {
    const wrapper = shallow(<CounterApp />);
    wrapper.find("button").at(2).simulate("click");

    const res = wrapper.find("h3").text().trim();

    expect(res).toBe("10");
  });
});
