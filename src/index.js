import React from "react";
import ReactDOM from "react-dom/client";
import AppPropTypes from "./AppPropTypes";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppPropTypes saludo="saludo principal" />);
