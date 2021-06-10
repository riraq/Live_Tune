import React, { useState, useRef } from "react"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services/auth-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

function SignUp(props) {

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div>
      <div className="row" />
      <div className="col-md-6" />
    <div className="card shadow p-3 mb-5 bg-body rounded">
      <div className="card-body">
        <h2 className="card-title">Sign Up</h2>
        <form className="form signup-form" onSubmit={handleRegister} ref={form}>
        {!successful && (
          <div>
        <div className="form-group">
            <label>
              <input type="text" className="form-control" placeholder="Username" onChange={onChangeUsername} value={username} validations={[required, vusername]} 
                aria-label="username" /></label>
          </div>
          <div className="form-group">
            <label>
              <input type="text" className="form-control" placeholder="Email" onChange={onChangeEmail} value={email} validations={[required, validEmail]} 
                aria-label="email" /></label>
          </div>
          <div className="form-group">
            <label>
              <input type="password" className="form-control" placeholder="Password" onChange={onChangePassword} value={password} validations={[required, vpassword]}
                aria-label="Password" /></label>
          </div>
          <div className="form-group">
            <button className="btn btn-dark" type="submit">Sign Up</button>
          </div>
          </div>
          )}
          {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />

        </form>
      </div>
    </div>
  </div>
  );
}

export default SignUp