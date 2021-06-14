import React from "react"
import { useLogout } from '../../utils/auth';

import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './style.css'
const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
}
  

function Nav() {

  const logout = useLogout();

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
      </ul>  */}