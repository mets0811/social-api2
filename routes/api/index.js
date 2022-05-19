const router = require('express').Router();
const thoughtRoute = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoute);
router.use('/users', userRoutes);

module.exports = router;
