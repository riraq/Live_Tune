import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './style.css'

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

     <input className="form-control" {...props} />

  );
}


function SearchBtn(props){
  return(
    
    <button {...props} style={{ float: "right", marginBottom: 10 }} className=" btn-success search-button">
      {props.children}
    </button>
  );
}
export {Search, SearchBtn}