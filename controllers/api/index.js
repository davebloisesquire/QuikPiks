const router = require('express').Router();
const userRoutes = require('./users');
const voteRoutes = require('./vote')

router.use('/users', userRoutes)
router.use('/vote', voteRoutes);

module.exports = router;
