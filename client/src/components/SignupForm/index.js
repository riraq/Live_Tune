import React from "react"

function SignUp(props) {
  return (
    <div>
      <div className="row" />
      <div className="col-md-6" />

        <h1 style={{margin: "1rem"}} >CREATE ACCOUNT!</h1>
        <form className="form signup-form">
        <div className="form-group">
            <label>
              <input type="text" className="form-control" placeholder="Email" onChange={props.onChange}
                aria-label="email" /></label>
          </div>
          <div className="form-group">
            <label>
              <input type="text" className="form-control" placeholder="Username" onChange={props.onChange}
                aria-label="username" /></label>
          </div>
          <div className="form-group">
            <label>
              <input type="password" className="form-control" placeholder="Password" onChange={props.onChange}
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