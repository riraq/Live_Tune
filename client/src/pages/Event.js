import React, { useState, useEffect, useContext } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import UserContext from "../utils/UserContext"
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";

import Nav from "../components/Nav";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Event(props) {
  const [eventDetails, setEvents] = useState({})
  const [venueDetails, setVenue] = useState({})
  const [userState, setUserState] = useState({})
  let history = useHistory();

  const { _id } = useContext(UserContext)
  const { id } = useParams()

  useEffect(() => {
    loadEvent();
    loadUser();
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

  function handleEventSave(event) {
    event.preventDefault();
    API.saveEvent({
      id: eventDetails.id,
      name: eventDetails.name,
      image: eventDetails.images[0].url,
      link: eventDetails.url,
      date: eventDetails.dates.start.localDate,
      venueName: venueDetails
    })
      .catch(err => console.log(err));
  }


  return (

    <React.Fragment>
    <CssBaseline />   
    <Container maxWidth="lg" className="main-wrapper ">
       <Container maxWidth="lg" className="event-wrapper ">
    <Grid container spacing={3}>
        <Grid item xs={12}>
        <Nav />
        </Grid>

   
      <button onClick={() => history.goBack()}>Back</button>
    
        <Title> {eventDetails.name} </Title>
        <h2>{venueDetails.name}</h2>
        <button onClick={handleEventSave}>Save Event</button>
        <Footer />
     

    <Grid item xs={12}>
        <Footer />
        </Grid>
      </Grid>
   
   </Container>
   
   
   </Container>
      
    </React.Fragment>
  )
}

export default Event;

