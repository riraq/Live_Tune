import React from "react"

function Header(props) {

  return (
    <div className="jumbotron text-center" style={{ height: 100, clear: "both", paddingTop: 50, textAlign: "center", marginBottom: "2rem", backgroundImage: `url("")`, backgroundBlendMode: "hard-light" }}>
      <div className="container text-dark">
        <h1>{props.username}</h1>
      </div>
    </div>
  );
}

export default Header;