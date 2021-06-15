import React from "react"
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function Bio(props) {

  return (
    <div>
       <h1>ABOUT ME</h1>
      <EditText />
      {props.bio}
      <EditTextarea />
    </div>
  );
}

export default Bio