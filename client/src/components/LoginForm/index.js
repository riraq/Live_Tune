import React from "react"
import Login from "../../pages/Login";

function Loginform() {
  const Login = async (event) => {

    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
  }

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
              <button class="btn btn-dark" onClick={Login()} type="submit">login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginform