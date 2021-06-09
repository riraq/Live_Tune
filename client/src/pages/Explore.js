import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CardWrapper from "../components/CardWrapper";
import styles from '../styles.modules.css';

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';

import Card from "../components/Card"
import {Search, SearchBtn} from "../components/Search";




function Explore() {
  const [events, setEvents] = useState({})
  const [searchForm, setsearchForm] = useState({})
 

  //Spring Const 
  const [open, set] = useState(false)
  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'white' : 'hotpink',
    },
  })



  const transApi = useSpringRef()
  const transition = useTransition(open ? events : [], {
    ref: transApi,
    trail: 400 / events.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })



  useEffect(() => {
  }, [])


   // This will orchestrate the two animations above, comment the last arg and it creates a sequence
   useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])


  function showState() {
    searchEvents()
    console.log("this is the events state: ", events)
  }

  function searchEvents() {
    API.getEvents()
      .then(res => setEvents(res.data))
      .catch(err => console.log("Error: ", err))
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setsearchForm({ [name]: value })
  };
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (searchForm.search) {
      API.getEvents(searchForm.search)
        .then(res => setEvents(res.data))
        .catch(err => console.log(err));
    }
  };

  return (
    <div>

      
      <div className="text-center">
        <h1>Explore</h1>
        <form>
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
      <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set(open => !open)}>
        {transition((style, item) => (
          <animated.div
            className={styles.item}
            style={{ ...style, background: item.css }}
          />
        ))}

      {events.length ?
          (events.map(event => (
            (<CardWrapper
              key={event.id}
              id={event.id}
              name={event.name}
              date={event.dates.start.localDate}
              image={event.images[4].url}
              url={event.url}
            />
            )))
          ) : (
            <div></div>
          )
        }

      </animated.div>

        
      </div>
    </div>
  )
}

export default Explore;