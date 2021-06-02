import React from "react"

function SignUp() {
  return (
    <div>
      <div class="row" />
      <div class="col-md-6" />
    <div class="card shadow p-3 mb-5 bg-body rounded">
      <div class="card-body">
        <h2 class="card-title">Sign Up</h2>
        <form class="form signup-form">
          <div class="form-group">
            <label for="email-login">
              <input type="text" class="form-control" placeholder="Full Name" id="name-signup"
                aria-label="Email Address" /></label>
          </div>
          <div class="form-group">
            <label for="email-login">
              <input type="text" class="form-control" placeholder="Email Address" id="email-signup"
                aria-label="Email Address" /></label>
          </div>
          <div class="form-group">
            <label for="password-login">
              <input type="password" class="form-control" placeholder="Password" id="password-signup"
                aria-label="Password" /></label>
          </div>
          <div class="form-group">
            <button class="btn btn-dark" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default SignUp