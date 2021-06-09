import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Card from "../components/Card";
import UserContext from "../utils/UserContext"
import { Link } from "react-router-dom";

function Profile() {
  const [eventsState, setEvents] = useState({});

  const { events } = useContext(UserContext)

  useEffect(() => {
    setEvents({events});
    console.log("eventsState", eventsState)
    console.log(events)
    // eslint-disable-next-line 
  }, []);


  function consoleClick() {
    console.log("eventsState", eventsState)
    console.log("events", events)
  }

  return (
    <div>
      <div className="container">
        <button onClick={consoleClick}>Console</button>
        <Header />
        <Link to={"/explore"}>
          <button><strong>Explore Page</strong></button>
        </Link>
        <Bio />
        <div>
          {events.length ? (
            (events.map(event => (
              <Card
                key={event.id}
                id={event.id}
                name={event.name}
                date={event.date}
                image={event.image}
                url={event.url}
              >
              </Card>
            )))
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