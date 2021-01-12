import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// CSS Normalization gives developers a safe starting point at which to know styles are the same across browsers
import "normalize.css";
import { GlobalStyles } from "./global-style";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
