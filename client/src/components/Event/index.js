import React, { useContext } from "react"
import UserContext from "../../utils/UserContext"
import Card from "../Card"

function Event() {
  const { events } = useContext(UserContext)
  const renderSavedEvents = (
    events.map(event => (
      <Card
      key={event.id}
      id={event.id}
      name={event.name}
      date={event.date}
      image={event.image}
      url={event.url}
      />
      )))

  return (
    <div>
      <h2>
        {renderSavedEvents}
      </h2>
    </div>
  );
}

export default Event