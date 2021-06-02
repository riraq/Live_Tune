import React from "react"

function Loginform() {
  return (
    <div>
      <div class="row" />
      <div class="col-md-6" />
      <div class="card shadow p-3 mb-5 bg-body rounded" id="card">
        <div class="card-body">
          <h2 class="card-title">Login</h2>
          <form class="form login-form">
            <div class="form-group">
              <label for="email-login">
                <input type="text" class="form-control" placeholder="Email Address" id="email-login"
                  aria-label="Email Address" /></label>
            </div>
            <div class="form-group">
              <label for="password-login">
                <input type="password" class="form-control" placeholder="Password" id="password-login"
                  aria-label="Password" /></label>
            </div>
            <div class="form-group">
              <button class="btn btn-dark" type="submit">login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginform