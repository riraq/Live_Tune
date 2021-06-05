
import React, { useContext } from "react"
import UserContext from "../../utils/UserContext"

function Header(){
  const { username } = useContext(UserContext)
  return(
     <div className="jumbotron text-center" style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", marginBottom:"2rem", backgroundImage: `url("")`, backgroundBlendMode:"hard-light"}}>
            <div className="container text-dark">
                <h1>{username}</h1>
            </div>
     </div>
    );
  }
  

export default Header;