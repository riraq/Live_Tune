// const db = require("../models");
const axios = require("axios")

// Defining methods for the eventsController
module.exports = {
  eventSearch: function (req, res) {
    axios.get(process.env.API_URL)
      .then(req => res.json(req.data._embedded.events))
      .catch(err => res.status(422).json(err));
  },
  findEvents: function (req, res) {
    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=" + req.params.search + "&" + process.env.API_URL)
      .then(req =>
        res.json(req.data._embedded.events)
      )
      .catch(err => res.status(422).json(err));
  },
  findEvent: function (req, res) {
    axios.get("https://app.ticketmaster.com/discovery/v2/events/" + req.params.id + ".json?" + process.env.API_URL)
      .then(req => res.json(req.data))
      .catch(err => res.status(422).json(err));
  },
};
