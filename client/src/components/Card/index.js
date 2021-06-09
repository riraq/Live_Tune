import React from "react";
import { Link } from "react-router-dom";

function Card(props) {

  const thumbnail = {
    "width": "100px",
    "height": "100px"
  }

  return (
    <div className="row m-2">
      <div className="col-4">
        <img alt="concert poster" style={thumbnail} src={props.image} />
      </div>
      <div className="col-8">
        <p>{props.name}</p>
        <p>{props.date}</p>
        <a href={props.url} target="blank"> Buy Tickets Here!</a>
        <Link to={"/events/" + props.id}>
          <button><strong>View Details</strong></button>
        </Link>
      </div>
    </div>
  );
}

export default Card