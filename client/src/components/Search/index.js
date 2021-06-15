import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function Search(props){
  const classes = useStyles();

  return(

    <Container maxWidth="lg" className="nav-wrapper ">
    <Grid item xs={12}>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="standard-basic" label=""  className="form-control w-50 border border-info" {...props} />
     </form>
     </Grid> 
     <Grid item xs={12}>
     <input className="form-control w-50 border border-info" {...props} />
     </Grid> 
        </Container>
      
  );
}

function SearchBtn(props){
  return(
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success w-25">
      {props.children}
    </button>
  );
}
export {Search, SearchBtn}