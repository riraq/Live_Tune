import React from "react"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "./style.css"


function Header(props) {

  return (

    <Container maxWidth="lg" >
 <Grid item xs={12} >
    <img className="logo-image" src="https://img.icons8.com/nolan/215/day-of-the-dead.png"/>
    </Grid> 
    <Grid item xs={12} >
    <a className="user-title">{props.username}</a>
      </Grid> 
      </Container>

 
  );
}

export default Header;