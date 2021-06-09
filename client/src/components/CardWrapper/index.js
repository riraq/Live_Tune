import React from "react"
import Card from "../Card"

function CardWrapper(props) {
  return (
    <div>
      <Card
              key={props.id}
              id={props.id}
              name={props.name}
              date={props.date}
              image={props.image}
              url={props.url}
      />
    </div>
  );
}

export default CardWrapper