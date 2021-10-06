const router = require('express').Router();
// Assumes the data table for usernames is User.
const { User } = require('../models')
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
// A homepage template should be created. This home page is for "guests": users without a login session.
    res.render('home');
})

//This URL is for the user-unique homepage. withAuth is used to send the user to a login page
//if an active user session is not identified.
router.get('/home', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
      });
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//if an active user tries to login, sends them to their home page.
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/home');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  
