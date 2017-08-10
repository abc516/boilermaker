const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boilermaker', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

// TODO add model definitions to separate file
const User = db.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
})


module.exports = db;
