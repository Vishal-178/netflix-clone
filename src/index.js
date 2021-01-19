import React from "react";
import { render } from "react-dom";
import App from "./app";
// CSS Normalization gives developers a safe starting point at which to know styles are the same across browsers
import "normalize.css";
import { GlobalStyles } from "./global-style";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";
render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
