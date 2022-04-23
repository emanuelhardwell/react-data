import React from "react";
import PropTypes from "prop-types";

const AppDefaultProps = ({ saludo = "soy secundario", secundario="" }) => {
  return (
    <div>
      <h1> titulo </h1>
      <h3> --{saludo}-- </h3>
      <h3> -- {secundario} -- </h3>
    </div>
  );
};

AppDefaultProps.propTypes = {
  saludo: PropTypes.string.isRequired,
};

AppDefaultProps.defaultProps = {
  secundario: "Soy el secundario",
};

export default AppDefaultProps;
