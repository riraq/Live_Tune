import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Login() {
  const [events, setEvents] = useState({})

  useEffect(() => {
  }, [])

  function showState() {
    init()
    console.log("this is the events state: ", events)
    }

  function init() {
    API.getEvents()
    .then(res => setEvents(res.data))
    .catch(err => console.log("Error: ", err))
  }
  return (
    <div>
      This is the Login Page
      <button onClick={showState}>console</button>
    </div>
  )
}

export default Login;
