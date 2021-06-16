import React, { useState, useEffect, useContext } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import Footer from "../components/Footer";
import EventNav from "../components/EventNav";
import { useHistory } from "react-router-dom";
import Nav from "../components/Nav";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import youtube from '../utils/youtube';
import SearchBar from '../components/Searchbar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import VideoItem from '../components/VideoItem';


function Event(props) {
  const [eventDetails, setEvents] = useState({})
  const [venueDetails, setVenue] = useState({})
  const [userState, setUserState] = useState({})
  const [videoState, setVideoState] = useState({ videos: [], selectedVideo: null})
  let history = useHistory();
  const { _id } = useContext(UserContext)
  const { id } = useParams()


/* YOUTUBE */
 /*  state = {
    videos: [],
    selectedVideo: null
} 


const youtubeSearch =  () => {
  console.log('eventDetails.name', eventDetails)
    youtube.get('/search', {
        params: {
            q: eventDetails.name
        }
    })
    .then(res => console.log('youtube res', res))
    .then(res => setVideoState(...videoState, {
        videos: res.data.items
    }))
    console.log("this is resp",videoState);
};

const handleVideoSelect = (video) => {
   setVideoState(...videoState, {selectedVideo: video})
}

 YOUTUBE */

  useEffect(() => {
    loadEvent();
    loadUser();
  }, [])



  function loadEvent() {
    API.getEvent(id)
      .then(res => {
        console.log('res.data', res.data)
        setEvents(res.data);
        setEvents(...eventDetails, {
          image: res.data.images[0].url
        })
        setVenue(res.data._embedded.venues[0])
      })
      .then(console.log('images', eventDetails))
      /* .then (res => youtubeSearch()) */
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
    console.log('eventDetails', eventDetails)
    API.saveEvent({
      id: eventDetails.id,
      name: eventDetails.name,
      image: eventDetails.images[0].url,
      link: eventDetails.url,
      date: eventDetails.dates.start.localDate,
      venueName: venueDetails
    })
    .then(window.location.href = "/profile")
    .catch(err => console.log(err));
  }
 
  return (

    <React.Fragment>
    <CssBaseline />   
    <Container maxWidth="lg" className="nav-wrapper ">
      <Grid item xs={12}>
        <Nav />
        </Grid> 
        </Container>
    <Container maxWidth="lg" className="main-wrapper ">
       <Container maxWidth="lg" className="event-wrapper ">
    <Grid container spacing={3}>
    <a onClick={() => history.goBack()}> <img src="https://img.icons8.com/nolan/96/back.png" className="Back-Button"/></a>
     
{/* 
     <EventNav /> */}

     
    <Grid item xs={12} className="Artist-Header">
        <p className="page-title"> {eventDetails.name} </p>
        {eventDetails.length ? (
          <img className="" alt="artist" src={eventDetails.images[0].url}/>
) : (<div></div>)
        }
      
        </Grid>
            
    <Grid item xs={12}>
        <h2>At the {venueDetails.name}</h2>
        <a onClick={handleEventSave} className="Favorites"> ADD TO FAVORITES! </a>
        </Grid>
    <Grid item xs={12}>
    {/*     <Footer /> */}
{/* 
    <div className='ui container' style={{marginTop: '1em'}}>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={videoState.selectedVideo}/>
                        </div>
                        <VideoItem handleVideoSelect={handleVideoSelect}/>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={handleVideoSelect} videos={videoState.videos}/>
                        </div>
                    </div>
                </div>
            </div> */}
    </Grid>
    </Grid>


   </Container>
   </Container>
    </React.Fragment>
  )
}

export default Event;