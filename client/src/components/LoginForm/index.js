import React, { useRef, useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import { useLogin } from "../../utils/auth";
import "./style.css";
import { useHistory } from "react-router-dom";
import UserContext from "../../utils/UserContext";

function LoginForm() {
  const { userState, loginState } = useContext(UserContext)
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    login({ email, password })
      .then(API.getUser(email)
        .then(res => loginState(res.data))
        .then(res => console.log('userState: ', userState))
        .then(res => history.push("/profile"))
        )
      .catch(err => console.log(err))
    // Handle error responses from the API
  }

  return (
    <div>
      <div className="row" />
      <div className="col-md-6" />
      <div id="card">
        <h1 style={{ margin: "1rem" }} >LOGIN</h1>

        <form className="form login-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <input type="text" className="form-control" ref={emailRef} placeholder="Email" aria-label="email" name="email" />
          </div>

          <div className="form-group">
            <input type="password" ref={passwordRef} className="form-control" placeholder="Password" name="password" aria-label="Password" />
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm