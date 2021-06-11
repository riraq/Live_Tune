import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import PrivateRoute from "./pages/PrivateRoute";
import GuestRoute from "./pages/GuestRoute";
import UserContext from "./utils/UserContext";
import { Frame, Scroll, useCycle } from "framer"
import "./index.css"
import { useAuthTokenStore } from "./utils/auth";

function App() {
  // Reauthenticates stored tokens
  useAuthTokenStore();

  const [userState, setUserState] = useState({
<<<<<<< HEAD
    _id: "",
=======
    _id: "vvG1zZpnQj77KL",
>>>>>>> main
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

  // useEffect(() => {
  //   loadUser()
  //   console.log("userState", userState)
  // }, []);

  // function loadUser() {
  //   API.getUser(userState._id)
  //     .then((res) => {
  //       setUserState(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }

  return (
    <Router>
      <div className="container main">
        <Switch>
          <Route exact path="/" component={Login} />
          <GuestRoute exact path="/" redirectTo="/profile" component={Login} />

          <UserContext.Provider value={userState}>
            <PrivateRoute exact path="/profile" redirectTo="/" component={Profile} />
            <PrivateRoute exact path="/explore" redirectTo="/" component={Explore} />
            <PrivateRoute exact path="/events/:id" redirectTo="/" component={Event} />
          </UserContext.Provider>
          <Route redirectTo="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;