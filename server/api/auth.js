const router = require('express').Router()
const User = require('../db/User')

//get the current logged-in user
router.get('/me', (req, res, next) => {
  res.json(req.user);
})

// matches POST requests to /api/auth/login
router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) res.status(401).send('User not found');
      else if (!user.hasMatchingPassword(req.body.password)) {
        res.status(401).send('Incorrect password')
      }
      else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});
//signup a new user
router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});
//logout user
router.post('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});
// matches PUT requests to /api/birds/:birdId
router.put('/:birdId', function (req, res, next) { /* etc */});
// matches DELTE requests to /api/birds/:birdId
router.delete('/:birdId', function (req, res, next) { /* etc */});

module.exports = router;
