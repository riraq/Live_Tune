import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Loginform from "../components/LoginForm";
import SignUp from "../components/SignupForm"

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
    .then(res => console.log(res))
    .then(res => setEvents( {...events, res} ))
    .catch(err => console.log("Error: ", err))
  }
  return (
    <div>
    <Loginform />
    <SignUp />
    <button onClick={showState}>console</button>
    </div>
  )
}

export default Login;
