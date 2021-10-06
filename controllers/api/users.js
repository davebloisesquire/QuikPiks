const router = require('express').Router();
const { User } = require('../../models');

// GET user data by ID

// GET all users
router.get('/users', (req, res) => {
  User.findAll()
  .then((users) => {
    res.json(users);
  })
  .catch((error) => res.json(error))
})

// POST new user

router.post('/user-new', (req, res) => {
  User.create(req.body)
  .then((newUser) => {
    res.json(newUser);
  })
  .catch((error) => res.json(error))
});

module.exports = router;
