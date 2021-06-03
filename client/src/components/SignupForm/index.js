import React from "react"

function SignUp() {
  return (
    <div>
      <div className="row" />
      <div className="col-md-6" />
    <div className="card shadow p-3 mb-5 bg-body rounded">
      <div className="card-body">
        <h2 className="card-title">Sign Up</h2>
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
            <button className="btn btn-dark" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default SignUp