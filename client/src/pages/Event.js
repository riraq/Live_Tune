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
  const [userState, setUserState] = useState({})

  const { _id } = useContext(UserContext)
  const { id } = useParams()

  useEffect(() => {
    loadEvent();
    loadUser();
    // eslint-disable-next-line 
  }, [])

  function loadEvent() {
    API.getEvent(id)
      .then(res => {
        setEvents(res.data);
        setVenue(res.data._embedded.venues[0])
      })
      .catch(err => console.log(err));
  }

  function loadUser() {
    API.getUser(_id)
      .then((res) => {
        setUserState(res.data);
      })
      .catch(err => console.log(err));
  }

  const consoleClick = () => {
    console.log("eventDetails: ", eventDetails)
    console.log("venueDetails: ", venueDetails)
    console.log("userState: ", userState)
  }

  function handleEventSave(event) {
    event.preventDefault();
    console.log("eventDetails", eventDetails)
    console.log("_id", _id)
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

