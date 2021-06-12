import React, { useState, useEffect } from "react"
import API from "../utils/API"
import Nav from "../components/Nav"
import Header from "../components/Header";
import Bio from "../components/Bio";
import Card from "../components/Card";

function Profile() {
  const [usernameState, setUsernameState] = useState("");
  const [bioState, setBioState] = useState("");
  const [eventsState, setEventsState] = useState("");

  useEffect(() => {
    API.getUser()
      .then(userInfo => {
        setUsernameState(userInfo.data[0].username);
        setBioState(userInfo.data[0].bio)
        setEventsState(userInfo.data[0].events)
      })
      .catch(err => console.log("Get user info error: " + err));
  }, []);

  return (
    <div>
      <Nav />

      <div className="container">
        <Header 
        username={usernameState}
        />

        <Bio 
        bio={bioState}/>

        <div>
          {eventsState.length ? (
            eventsState.map(event => (
              <Card
                key={event.id}
                id={event.id}
                name={event.name}
                date={event.date}
                image={event.image}
                url={event.url}
                venueName={event.venueName}
              >
              </Card>
            ))
          ) : (
            <div></div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Profile;