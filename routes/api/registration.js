const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with "/api/registration"
router.route('/')
  .post(userController.register);
// .post(userController.create);

router
  .route('/:id')
  .get(userController.findById);
// .post(userController.destroy);

module.exports = router;


// router.get('/', async (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/dashboard');
//         return;
//     }
//     res.render('login');
// });

// router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/dashboard');
//         return;
//     }

//     res.render('login');
// });