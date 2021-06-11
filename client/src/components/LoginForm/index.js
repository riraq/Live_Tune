import React, { useRef } from "react"
import { useLogin } from "../../utils/auth"
import "./style.css"

function LoginForm() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const login = useLogin();

  const handleSubmit = async e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password)

    try {
      await login({ email, password });
      // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    } catch (err) {
      // Handle error responses from the API
      if (err.response && err.response.data) console.log(err.response.data);
    }
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