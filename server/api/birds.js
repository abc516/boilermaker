const router = require('express').Router();

// matches GET requests to /api/birds/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/birds/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/birds/:birdId
router.put('/:birdId', function (req, res, next) { /* etc */});
// matches DELTE requests to /api/birds/:birdId
router.delete('/:birdId', function (req, res, next) { /* etc */});

module.exports = router;
