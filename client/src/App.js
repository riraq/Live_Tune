import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import UserContext from "./utils/UserContext";


function App() {
  const [userState, setUserState] = useState({
    email: "",
    username: "",
    password: "",
    bio: "",
    events: [{ 
      id: "",
      name: "",
      image: "",
      link: "",
      date: "",
    }],
  })

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
            </Route>
          <UserContext.Provider value={userState}>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/event">
              <Event />
            </Route>
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;