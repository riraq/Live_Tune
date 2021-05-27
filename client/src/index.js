import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./components/Explore";
import Event from "./components/Event";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/event">
            <Event />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;