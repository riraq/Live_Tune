import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import UserContext from "./utils/UserContext";
import "./index.css"


function App() {
  const [userState, setUserState] = useState({
    _id: "60bfcc1d7456621eb80c4824",
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

  useEffect(() => {
    loadUser()
    console.log("userState", userState)
}, []);

  function loadUser() {
    API.getUser(userState._id)
      .then((res) => {
        setUserState(res.data);
      })
      .catch(err => console.log(err));
  }
  return (
    <Router>
      <div className="container main">
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