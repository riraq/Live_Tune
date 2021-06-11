import React, { useContext } from "react"
import UserContext from "../../utils/UserContext"

function Header() {
  const { userState } = useContext(UserContext)

  return (
    <div className="jumbotron text-center" style={{ height: 100, clear: "both", paddingTop: 50, textAlign: "center", marginBottom: "2rem", backgroundImage: `url("")`, backgroundBlendMode: "hard-light" }}>
      <div className="container text-dark">
        <h1>{userState.state[0].username}</h1>
      </div>
    </div>
  );
}


export default Header;