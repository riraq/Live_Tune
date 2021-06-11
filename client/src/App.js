import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import UserContext from "./utils/UserContext";
// import { Frame, Scroll, useCycle } from "framer"
import "./index.css"
import { StoreProvider } from "./store";

function App() {
  const [userState, setUserState] = useState({
    _id: "",
    email: "",
    username: "",
    bio: "",
    events: [{
      id: "",
      name: "",
      image: "",
      link: "",
      date: "",
    }],
  })
  
  function loginState(state) {
    setUserState({state});
  }

  return (
    <Router>
      <div className="container main">
        <Switch>
          <StoreProvider>
            <UserContext.Provider value={{ userState, loginState }}>
              <Route exact path="/" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/events/:id" component={Event} />
            </UserContext.Provider>
          </StoreProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;