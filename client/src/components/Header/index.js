import React, { useContext } from "react"
import UserContext from "../../utils/UserContext"

function Header(){
  const { username } = useContext(UserContext)
  return(
    <div>
      <h1>{username}</h1>
    </div>
  );
}

export default Header