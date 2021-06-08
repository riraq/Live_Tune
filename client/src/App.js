import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import UserContext from "./utils/UserContext";


function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <UserContext.Provider value={{}}>
            <Route exact path="/profile">
              <Profile />
            </Route>
              <Route exact path="/explore">
                <Explore />
              </Route>
              <Route exact path="/events/:id">
                <Event />
              </Route>
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;