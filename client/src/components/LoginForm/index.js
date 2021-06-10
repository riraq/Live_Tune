import React, { useState, useRef } from "react"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

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


function LoginForm(props) {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

    return (
    <div>
      <div className="row" />
      <div className="col-md-6" />
      <div className="card shadow p-3 mb-5 bg-body rounded" id="card">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form className="form login-form" onSubmit={handleLogin} ref={form}>
            <div className="form-group">
              <label>
                <input type="text" className="form-control" placeholder="Username"
                  aria-label="username" value={username} onChange={onChangeUsername} validations={[required]} name="username" /></label>
            </div>
            <div className="form-group">
              <label>
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={onChangePassword} validations={[required]} name="password"
                  aria-label="Password" /></label>
            </div>
            <div className="form-group">
            <button className="btn btn-dark btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
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


export default LoginForm