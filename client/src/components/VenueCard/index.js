import React from "react"

function VenueCard(props) {
  const banner = {
    "width": "80%",
    "height": "300px"

  }
  return (
    <div className="row m-2">
      <div className="col-8" style={banner} >
       <h3>{props.name}</h3>

       <img alt="concert poster" src={props.image} />
       <img alt="concert poster" ={props.image}src />
      </div>
     

    </div>
  );
}

export default VenueCard