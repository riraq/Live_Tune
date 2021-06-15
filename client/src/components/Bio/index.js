import React, { useRef } from "react";
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import API from '../../utils/API';


function Bio(props) {

  const bioRef = useRef();
  const locationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bio = bioRef.current.value;
    const location = locationRef.current.value;


    API.getLocation({
      bio: bio,
      location: location
    })
      .then(() => { window.location.href = "/profile" });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Location</h4>
        <textarea placeholder={props.location} ref={locationRef}></textarea>
        About Me
        <textarea placeholder={props.bio} ref={bioRef} ></textarea>
        <button className="btn btn-dark" type="submit">save</button>
      </form>
    </div>
  );
}

export default Bio