import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browser, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
// import { JumbotrinContiner } from "./containers/Jumbotron";
function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGNIN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGNUP}>
        <SignUp />
      </Route>
      <Route exact path={ROUTES.BROWSER}>
        <Browser />
      </Route>
    </Router>
  );
}

export default App;
