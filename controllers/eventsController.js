// const db = require("../models");
const axios = require("axios")

// Defining methods for the eventsController
module.exports = {
  eventSearch: function (req, res) {
    axios.get(process.env.API_URL)
    .then(req => res.json(req.data._embedded.events))
    .catch(err => res.status(422).json(err));
  },
  // findAll: function(req, res) {
  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findEvents: function(req, res) {
    console.log(req.params.search)
      axios.get("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=" + req.params.search + "&" + process.env.API_URL)
      .then(req => 
        // console.log(req.data)
        res.json(req.data._embedded.events)
        )
      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
