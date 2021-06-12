import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import UserContext from "./utils/UserContext";
// import { Frame, Scroll, useCycle } from "framer"
import "./index.css"
import { useAuthTokenStore } from "./utils/auth";

function App() {
  const isDone = useAuthTokenStore();

  return (
    <Router>
      {isDone && <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/events/:id" component={Event} />
        <Route exact path="*" component={Login}></Route>
      </Switch>}
    </Router>
  );
}

export default App;