import React, { useState, useEffect } from "react"
import API from "../utils/API"
import Nav from "../components/Nav"
import Header from "../components/Header";
import Bio from "../components/Bio";
import Card from "../components/Card";


import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from "../components/Footer";



function Profile() {
  const [usernameState, setUsernameState] = useState("");
  const [bioState, setBioState] = useState("");
  const [locationState, setLocationState] = useState("");

  const [eventsState, setEventsState] = useState("");

  useEffect(() => {
    bioRefresh()
  }, []);

  const bioRefresh = () => {
    API.getUser()
      .then(userInfo => {
        setUsernameState(userInfo.data[0].username);
        setLocationState(userInfo.data[0].aboutme.slice(-1)[0].location)
        setBioState(userInfo.data[0].aboutme.slice(-1)[0].bio)
        setEventsState(userInfo.data[0].events)
      })
      .catch(err => console.log("Get user info error: " + err));
  }

  return (

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className="nav-wrapper ">
        <Grid item xs={12}>
          <Nav />
        </Grid>
      </Container>

      <Container maxWidth="lg" className="header-wrapper ">

        <Container maxWidth="lg" className="event-wrapper ">
          <Grid container spacing={3}>


            <Grid item xs={12} >
              <Header
                username={usernameState}
              />
            </Grid>

            <Grid item xs={12} >
              <img className="location-icon " src="https://img.icons8.com/nolan/66/worldwide-location.png" />
              <h4>Location</h4>
            </Grid>


            <Grid item xs={12}>
              <Bio

                location={locationState}
                bio={bioState} />
            </Grid>

            <Grid item xs={12}>
              <Grid item xs={4} className="Event-Card">
                {eventsState.length ? (
                  eventsState.map(event => (
                    <Card
                      key={event.id}
                      id={event.id}
                      name={event.name}
                      date={event.date}
                      image={event.image}
                      url={event.url}
                      venueName={event.venueName}
                    >
                    </Card>
                  ))
                ) : (
                  <div></div>
                )
                }
              </Grid>
            </Grid>


            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>

        </Container>
      </Container>
    </React.Fragment>



  )
}

export default Profile;