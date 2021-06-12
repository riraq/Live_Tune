import React from "react"
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function Bio(props) {

  return (
    <div>
      <h4>Location</h4>
      <EditText />
      About Me
      {props.bio}
      <EditTextarea />
    </div>
  );
}

export default Bio