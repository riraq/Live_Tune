import React, { useRef } from "react";
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import API from '../../utils/API';
import Grid from '@material-ui/core/Grid';
import './style.css';

function Bio(props) {

  const bioRef = useRef();
  const locationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bio = bioRef.current.value;
    const location = locationRef.current.value;


    API.getLocation({
      bio: bio, 
      location: location}
      )
    .then(() => {
      return
    });
  };

  return (
    <div>
      
       
      <form className="form" onSubmit={handleSubmit}>
      <img className="location-icon " src="https://img.icons8.com/nolan/66/worldwide-location.png"/>
      <h3>Location</h3>
      <textarea className="bio-textarea" placeholder={props.location} ref={locationRef}></textarea>
      <br></br>
      <h3>About Me</h3>
      <textarea placeholder={props.bio}ref={bioRef} ></textarea>
      <br></br>
      <button className="btn btn-dark bio-button" type="submit">save</button>
      </form>
    
    </div>
  );
}

export default Bio