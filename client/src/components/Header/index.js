import React, { useState, useEffect } from "react"
import API from "../../utils/API"

function Header() {
  const [usernameState, setusernameState] = useState("");

  useEffect(() => {
    API.getUser()
      .then((userInfo) => {
        setusernameState(userInfo.data[0].username)
      })
      .catch((err) => console.log("Get user info error: " + err));
  }, []);

  return (
    <div className="jumbotron text-center" style={{ height: 100, clear: "both", paddingTop: 50, textAlign: "center", marginBottom: "2rem", backgroundImage: `url("")`, backgroundBlendMode: "hard-light" }}>
      <div className="container text-dark">
        <h1>{usernameState}</h1>
      </div>
    </div>
  );
}

export default Header;