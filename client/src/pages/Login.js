import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import "../index.css"



function Login() {

  return (

    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm" className=" main-landing login">

   
    <LoginForm />
        <SignUpForm />
      </Container>
    </React.Fragment>
  )
}

export default Login;