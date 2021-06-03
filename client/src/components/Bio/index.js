import React, { useContext } from "react"
import UserContext from "../../utils/UserContext"

function Bio(){
  const { bio } = useContext(UserContext)
  return(
    <div>
      <h2>{bio}</h2>
    </div>
  );
}

export default Bio