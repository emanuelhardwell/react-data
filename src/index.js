import React from "react";
import ReactDOM from "react-dom/client";
import AppDefaultProps from "./AppDefaultProps";
// import AppPropTypes from "./AppPropTypes";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppDefaultProps saludo="saludo principal" />);
