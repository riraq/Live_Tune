import React, { useContext } from "react"
import UserContext from "../../utils/UserContext"
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function Bio(){
  const { bio } = useContext(UserContext)
  return(
    <div>
        <h4>Location</h4>
        <EditText />
        About Me
        <EditTextarea>{bio}</EditTextarea>
    </div>
  );
}

export default Bio