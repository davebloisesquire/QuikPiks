const router = require('express').Router();

const userRoutes = require('./vote');

router.use('/vote', userRoutes);

module.exports = router;
