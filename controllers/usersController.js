const db = require("../models");
import isEmail from 'validator/lib/isEmail';

module.exports = {
    findOne: function(req, res) {

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
        })} .catch (err => {
            res.status(400).json(err);
        })
}



// findAll)
// .post(userController.create)

// router
// .route("/:id")
// .get(userController.findById)
// .post(userController.destory
// // Defining methods for the booksController
// module.exports = {
//   findAll: function(req, res) {
//     db.User
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.User
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.User
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
