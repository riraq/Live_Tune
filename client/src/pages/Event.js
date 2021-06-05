
import React from "react";
import Header from "../components/Header"; 
import VenueCard from "../components/VenueCard"; 

function Event(props) {
  return (

    <div>

        <Header 
         name={props.name}
        />
       
      <div className="text-center">

            <p>{props.date}</p>
{/*         <p>{props.description}</p> */}

        </div>

        <VenueCard
        name={props.venueName}
      />
   {/*    possible Youtube API  */}
    {/*  <button onClick={}> Buy Tickets</button> */}
    </div>
  )
}

export default Event;

