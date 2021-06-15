const router = require('express').Router();
const eventRoutes = require('./events');
const singleEventRoute = require('./event');
const loginRoutes = require('./login');
const userRoutes = require('./user');
const aboutmeRoutes = require('./aboutme');
const registrationRoutes = require('./registration');

// Event routes
router.use('/events', eventRoutes);
router.use('/event', singleEventRoute);
router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/aboutme', aboutmeRoutes);

router.use('/register', registrationRoutes);

module.exports = router;