import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Card from "../components/Card"
import { Search, SearchBtn } from "../components/Search";
import { Link } from "react-router-dom";

function Explore() {
  const [events, setEvents] = useState({});
  const [searchForm, setsearchForm] = useState({});

  useEffect(() => {
  }, []);

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
        <Link to={"/profile"}>
          <button><strong>Profile Page</strong></button>
        </Link>
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
            </Card>
          )))
        ) : (
          <div></div>
        )
        }
      </div>
    </div>
  )
}

export default Explore;