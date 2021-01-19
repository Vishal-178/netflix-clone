import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Browser, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
// import { JumbotrinContiner } from "./containers/Jumbotron";
import { IsUserRedirect, ProtectedRoute } from "./helper/routes";
import { useAuthListener } from "./hooks";
function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSER}
          path={ROUTES.SIGNIN}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSER}
          path={ROUTES.SIGNUP}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSER}>
          <Browser />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSER}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
