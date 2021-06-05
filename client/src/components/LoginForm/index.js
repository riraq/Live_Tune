import React from "react"
import "./style.css"

function LoginForm(props) {

  return (
    <div>
      <div className="row" />
      <div className="col-md-6" />
      <div id="card">
          <h1 style={{margin: "1rem"}} >LOG IN</h1>
         
          <form className="form login-form">
            <div className="form-group">
              <label>
                <input type="text" className="form-control" placeholder="Username"
                  aria-label="Email Address" onChange={props.onChange} name="username" /></label>
            </div>
            <div className="form-group">
              <label>
                <input type="password" className="form-control" placeholder="Password" onChange={props.onChange} name="password"
                  aria-label="Password" /></label>
            </div>
            <div className="form-group">
              <button className="btn btn-dark" type="submit">login</button>
            </div>
          </form>
        
      </div>
    </div>
  );
}

export default LoginForm