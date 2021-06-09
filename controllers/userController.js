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
    db.User.findOne({ where: { username: req.body.username } })
      .then(userData => {
        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }

        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          res.json({ user: userData, message: 'You are now logged in!' });
        });
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};