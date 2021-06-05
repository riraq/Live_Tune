import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CardWrapper from "../components/CardWrapper"

function Explore() {
  const [events, setEvents] = useState({})

  useEffect(() => {
  }, [])

  function showState() {
    init()
    console.log("this is the events state: ", events)
  }

  function init() {
    API.getEvents()
      .then(res => setEvents(res.data))
      .catch(err => console.log("Error: ", err))
  }

  return (
    <div>
      <div className="text-center">
        <h1>Explore</h1>
        <button onClick={showState}>Show Events!</button>
      </div>
      <div>
        {events.length ?
          (events.map(event => (
            (<CardWrapper
              key={event.id}
              id={event.id}
              name={event.name}
              date={event.dates.start.localDate}
              image={event.images[4].url}
              url={event.url}
            />
            )))
          ) : (
            <div></div>
          )
        }
      </div>
    </div>
  )
}

export default Explore;