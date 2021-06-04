
import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext"

function Event() {

  const { event } = useContext(UserContext);

  return (
    <div>
      This is the Event Page
    </div>
  )
}

export default Event;

