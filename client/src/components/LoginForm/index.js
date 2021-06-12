import React, { useRef, useState } from "react";
import { useLogin } from "../../utils/auth";
import "./style.css";

function LoginForm() {
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const login = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const loginData = await login({ email, password });
      // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
      window.location.href = "/profile";
    } catch (err) {
      // Handle error responses from the API
      if (err.response && err.response.data) {
        let message = "Login Error. ";
        if (err.response.data.email) message += err.response.data.email;
        if (err.response.data.password) message += err.response.data.password;
        setLoginErrorMessage(message);
      } else {
        setLoginErrorMessage("Login Error.");
      }
    }
  };

  return (
    <div>
      <div id="card">
        <h1 style={{ margin: "1rem" }} >LOGIN</h1>

        <form className="form login-form" onSubmit={handleSubmit}>
          {loginErrorMessage && <h1>{loginErrorMessage}</h1>}

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