import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext"
import Header from "../components/Header"; 
import VenueCard from "../components/VenueCard"; 
import Title from "../components/Title"; 

function Event(props) {
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


  const { event } = useContext(UserContext);

  return (

    
    <div>

        <Header />
       
      <div className="text-center">
         <Title> {events.name} </Title>
        <p>{events.description}</p>
        </div>

        <VenueCard
        name={events[0].name}
        image={events[0].image}
      />

      

{/*         <button onClick={}> Buy Tickets</button> */}
    </div>
  )
}

export default Event;


