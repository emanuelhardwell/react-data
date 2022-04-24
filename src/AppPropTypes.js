import React from "react";
import PropTypes from "prop-types";

const AppPropTypes = ({
  saludo = "Saludo secundario en caso de que no se mande ninguno desde el padre",
}) => {
  return (
    <div>
      <h1> hola mundo </h1>

      <h2> Saludo: </h2>
      <h4> {saludo} </h4>
      <p> Estos son los PropTypes </p>
    </div>
  );
};

AppPropTypes.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default AppPropTypes;
