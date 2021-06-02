import React from "react"
import Card from "../Card"

function CardWrapper(props) {
  console.log("cardwrapper props", props)
  return (
    <div className="container-fluid">
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