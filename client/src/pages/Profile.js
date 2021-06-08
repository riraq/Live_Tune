import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Event from "../components/Event";
import UserContext from "../utils/UserContext"
import { Link } from "react-router-dom";

function Profile() {
  const [userState, setUserState] = useState({
    _id: "60b936e4aefb992fa8a127bb",
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
  }, []);

  function loadUser() {
    API.getUser(userState._id)
      .then((res) => {
        setUserState(res.data);
      });

  }

  return (
    <div>
      <div className="container">
        <UserContext.Provider value={userState}>
          <Header />
          <Link to={"/explore"}>
            <button><strong>Explore Page</strong></button>
          </Link>
          <Bio />
          <Event />
        </UserContext.Provider>
      </div>
    </div>
  )
}

export default Profile;