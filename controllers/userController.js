const db = require("../models/");

// Defining methods for the booksController
module.exports = {
  //   findAll: function(req, res) {
  //     db.User
  //       .find(req.query)
  //       .sort({ date: -1 })
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function (req, res) {
  //   console.log("create function in userController - req: ", req.body)
  //   db.User
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  update: function (req, res) {
    console.log(req.body)
    db.User
      .findByIdAndUpdate({ _id: req.body._id }, {$push: {events: req.body}})
      .then(dbModel => {
        res.json(dbModel)
        console.log("dbModel", dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  //   remove: function(req, res) {
  //     db.User
  //       .findById({ _id: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
