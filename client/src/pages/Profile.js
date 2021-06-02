import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Events from "../components/Event";

function Profile() {


  return (
    <div>
      <div className="container">
        <Header />
        <Bio />
        <Events />
      </div>
    </div>
  )
}

export default Profile;