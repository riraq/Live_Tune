import React, { useState, useEffect, useContext } from "react";
// import UserContext from "../utils/UserContext"
import Header from "../components/Header";
// import VenueCard from "../components/VenueCard"; 
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import UserContext from "../utils/UserContext"

function Event() {
  const [eventDetails, setEvents] = useState({})
  const [venueDetails, setVenue] = useState({})

  const { _id } = useContext(UserContext)
  const { id } = useParams()

  useEffect(() => {
    API.getEvent(id)
      .then(res => {
        setEvents(res.data);
        setVenue(res.data._embedded.venues[0])
      })
      .catch(err => console.log("errrrrr", err));
  }, [])

  const consoleClick = () => {
    console.log("eventDetails: ", eventDetails)
    console.log("venueDetails: ", venueDetails)
  }

  function handleEventSave(event) {
    event.preventDefault();
    console.log(eventDetails)
    console.log(_id)
    API.saveEvent({
      _id: _id,
      id: eventDetails.id,
      name: eventDetails.name,
      image: eventDetails.images[0].url,
      link: eventDetails.url,
      date: eventDetails.dates.start.localDate,
    })
      .catch(err => console.log(err));
  }


  return (
    <div>
      <Header />
      <div className="text-center">
        <Title> {eventDetails.name} </Title>
        <h2>{venueDetails.name}</h2>
        <button onClick={consoleClick}>Console</button>
        <button onClick={handleEventSave}>Save Event</button>
      </div>
    </div>
  )
}

export default Event;

