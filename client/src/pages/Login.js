import React, { useState, useEffect } from "react";
import API from "../utils/API";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignupForm"

function Login() {
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  // useEffect(() => {
  //   loadUser()
  // }, [])

  function handleInputChange(event) {
    console.log(event)
    const {name, value} = event.target;
    if (name === "username") {
    setUsername({...username, value}) 
  } else {
    setPassword({...password, value});
    setEmail({...email, value})
  } 
  console.log(email)
  console.log(username)
  console.log(password)
  };

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (username && password) {
  //     API.userLogin({
  //       username: username,
  //       password: password,
  //     })
  //       .then(res => loadUser())
  //       .catch(err => console.log(err));
  //   }
  // };


  return (
    <div>
    <LoginForm 
    onChange={handleInputChange}
    />
    <SignUp 
    onChange={handleInputChange}
    />
    {/* <button onClick={showState}>console</button> */}
    </div>
  )
}

export default Login;
