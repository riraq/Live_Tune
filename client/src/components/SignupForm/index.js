import React, { useRef, useState } from "react"
import { useLogin } from "../../utils/auth"
import API from "../../utils/API"

function SignUp() {
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState("");
  
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const login = useLogin();

  const handleSubmit = async e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Register the user.
      await API.register({ email, username, password });

      // User has been successfully registered, now log them in with the same information.
      await login({ email, username, password });
      window.location.href = "/profile";

      // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    } catch (err) {
      // Handle error responses from the API. This will include
      if (err.response && err.response.data) console.log(err.response.data);
    }
  }

  return (
    <div>
      <h1 style={{ margin: "1rem" }} >CREATE ACCOUNT!</h1>

      <form className="form signup-form" onSubmit={handleSubmit}>
      {registrationErrorMessage && <h1>{registrationErrorMessage}</h1>}

        <div className="form-group">
          <input type="text" className="form-control" ref={emailRef} placeholder="Email" aria-label="email" />
        </div>
        
        <div className="form-group">
          <input type="text" className="form-control" ref={usernameRef} placeholder="Username" aria-label="username" />
        </div>
        
        <div className="form-group">
          <input type="password" className="form-control" ref={passwordRef} placeholder="Password" aria-label="password" />
        </div>
        
        <div className="form-group">
          <button className="btn btn-dark" type="submit">SIGN UP</button>
        </div>

      </form>
      
    </div>
  );
}

export default SignUp