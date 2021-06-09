import React from "react"

function Search(props){
  return(
      <input className="form-control w-50 border border-info" {...props} />
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