import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm"
import "../index.css"


function Login() {

  return (
    <div className="container main-landing login" >
        <LoginForm />
        <SignUpForm />
    </div>
  )
}

export default Login;