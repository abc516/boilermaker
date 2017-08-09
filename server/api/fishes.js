const router = require('express').Router();

// matches GET requests to /api/fishes/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/fishes/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/fishes/:fishId
router.put('/:fishId', function (req, res, next) { /* etc */});
// matches DELTE requests to /api/fishes/:fishId
router.delete('/:fishId', function (req, res, next) { /* etc */});

module.exports = router;
