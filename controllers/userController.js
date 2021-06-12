const db = require('../models');
// const isEmail = require('validator/lib/isEmail');

module.exports = {
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.User
      .findByIdAndUpdate({ _id: req.body._id }, { $push: { events: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOne: function (req, res) {
    db.User
      .find({ email: req.body.email })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  findUser: function (req, res) {
    db.User
      .find({ email: req.user.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  register: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};