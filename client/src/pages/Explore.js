import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { Search, SearchBtn } from "../components/Search";
import { Link } from "react-router-dom";


import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';

function Explore() {
  const [events, setEvents] = useState({})
  const [searchForm, setsearchForm] = useState({})

  useEffect(() => {
  }, [])

  function handleInputChange(event) {
    const { name, value } = event.target;
    setsearchForm({ [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(searchForm);
    if (searchForm.search) {
      API.getEvents(searchForm.search)
        .then(res => setEvents(res.data))
        .catch(err => console.log(err));
    }
  };

  return (
    
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg" className="nav-wrapper ">
      <Grid item xs={12}>
        <Nav />
        </Grid> 
        </Container>
    <Container maxWidth="lg" className="main-wrapper ">
    <Grid container spacing={3}>
      
        <Grid item xs={12}>
        <p className="page-title">LET'S EXPLORE THE CITY!!!</p>
        </Grid>
        <Grid item xs={12}>
        <form className="form-group search-form">
          <Search
            onChange={handleInputChange}
            className="search-box"
            name="search"
            placeholder="Search Location"
          />
          <SearchBtn
            disabled={!(searchForm.search)}
            onClick={handleFormSubmit}
          >
           FIND EVENTS
          </SearchBtn>
        </form>
        </Grid>
       

    <Grid container spacing={6} >
  
    <Grid item xs={12} className="Events">
        <Grid item xs={4} className="Event-Card">
        {events.length ? (
          (events.map(event => (
            <Card
              key={event.id}
              id={event.id}
              name={event.name}
              date={event.dates.start.localDate}
              image={event.images[4].url}
              url={event.url}
              venueName={event._embedded.venues[0].name}
            >
            </Card>)))
        ) : (
          <div></div>
        )}
        </Grid> </Grid>
        </Grid>
        <Grid item xs={12}>
        <Footer />
        </Grid>
      </Grid>
   
    </Container>
    </React.Fragment>




  )
}

export default Explore;

/* 
<Nav />
<div className="text-center">
  <h1>Explore</h1>
  { <Link to={"/profile"}>
    <button><strong>Profile Page</strong></button>
  </Link> }
  <form className="form-group">
    <Search
      onChange={handleInputChange}
      name="search"
      placeholder="Search for an Event"
    />
    <SearchBtn
      disabled={!(searchForm.search)}
      onClick={handleFormSubmit}
    >
      Find Events
    </SearchBtn>
  </form>
</div>


<div>
  {events.length ? (
    (events.map(event => (
      <Card
        key={event.id}
        id={event.id}
        name={event.name}
        date={event.dates.start.localDate}
        image={event.images[4].url}
        url={event.url}
      >
      </Card>)))
  ) : (
    <div></div>
  )}
</div> */