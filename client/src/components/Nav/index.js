import React from "react"
import { useLogout } from '../../utils/auth';
// import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import "./style.css";

import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './style.css'
const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
}
  

function Nav() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExplore = () => {
    window.location = "/explore"
  }

  const handleProfile = () => {
    window.location = "/profile"
  }

  const logout = useLogout();
  // let history = useHistory();

  return (
    
<Grid container spacing={3} className="Nav-Grid">
     <Grid item xs={4} >
     <ThemeProvider theme={theme}>
          <a aria-current="page" href="/profile">Profile</a>
      </ThemeProvider>
      </Grid>
      <Grid item xs={4}>

      <ThemeProvider theme={theme}>
      <a className="nav-link active" aria-current="page" href="/explore">Explore</a>
      </ThemeProvider>
      </Grid>

      <Grid item xs={4}>
      <ThemeProvider theme={theme}>
      <a className="nav-link active" onClick={logout} href="/">Logout</a>
      </ThemeProvider>
     </Grid>
     </Grid>


    
     


    
  );
}

export default Nav



      {/* <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" href="/profile">Profile</button>
        
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/explore">Explore</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" onClick={logout} href="/">Logout</a>
        </li>
      </ul> 

    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <div style={{color: "white"}}>Menu</div>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleExplore}>Explore</MenuItem>
        <MenuItem onClick={() => history.goBack()}>Back</MenuItem> 
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div> */}
  );
}