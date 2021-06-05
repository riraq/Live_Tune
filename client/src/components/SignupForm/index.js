import React from "react"

function SignUp() {
  return (
    <div>
      <div className="row" />
      <div className="col-md-6" />

        <h1 style={{margin: "1rem"}} >CREATE ACCOUNT!</h1>
        <form className="form signup-form">
          <div className="form-group">
            <label>
              <input type="text" className="form-control" placeholder="Full Name" id="name-signup"
                aria-label="Email Address" /></label>
          </div>
          <div className="form-group">
            <label>
              <input type="text" className="form-control" placeholder="Email Address" id="email-signup"
                aria-label="Email Address" /></label>
          </div>
          <div className="form-group">
            <label>
              <input type="password" className="form-control" placeholder="Password" id="password-signup"
                aria-label="Password" /></label>
          </div>
          <div className="form-group">
            <button className="btn btn-dark" type="submit">SIGN UP</button>
          </div>
        </form>
      </div>
  
  );
}

export default SignUp