const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/fishes', require('./fishes')); // matches all requests to  /api/puppies/
router.use('/birds', require('./birds')); // matches all requests to  /api/kittens/

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
})

module.exports = router;
