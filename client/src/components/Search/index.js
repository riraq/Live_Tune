import React from "react"

function Search(props){
  return(
    <div className="form-group w-50">
      <input className="form-control" {...props} />
    </div>
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