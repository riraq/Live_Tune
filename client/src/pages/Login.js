import React from "react";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignupForm"
import "../index.css"


function Login() {

  return (
    <div className="container main-landing " >

      <div className="container login">
        <LoginForm />
        <SignUp />
      </div>

    </div>
  )
}

export default Login;