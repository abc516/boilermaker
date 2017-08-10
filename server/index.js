const path = require('path');
const express = require('express');
const expressLogger = require('express-logger')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express();

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, '../public')))

// Any routes or other various middlewares should go here!
app.use(expressLogger)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./api') )// matches all requests to /api

db.sync()
.then(() => console.log('db_synced!'))
.then(() => app.listen(3000, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log("Your server, listening on port 3000");
}))


// Note, error handling middleware is in our /server/api/index.js file
app.get('*', function (req, res, next) {
  console.log('Hit general route!')
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

//For handling HTTP 500 Errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
