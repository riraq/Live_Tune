import React from "react";
import Nav from "../components/Nav"
import Header from "../components/Header";
import Bio from "../components/Bio";
import Card from "../components/Card";

function Profile() {

  return (
    <div>

      <Nav />

      <div className="container">
        <Header />
        <Bio />
        <Card />
      </div>

    </div>
  )
}

export default Profile;