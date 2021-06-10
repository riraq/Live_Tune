import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Login from "./components/LoginForm";
import SignUp from "./components/SignupForm";

import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import BoardUser from "./components/BoardUser/BoardUser";
import Event from "./pages/Event";
import UserContext from "./utils/UserContext";
import AuthService from "./services/auth-service";


function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (

    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Home
            </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/login"]} component={Login}>
            </Route>
            <Route exact path={["/register"]} component={SignUp}>
            </Route>
            <Route exact path={["/user"]} component={BoardUser}>
            </Route>
          <UserContext.Provider value={{}}>
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
    </div>
  );
}

export default App;