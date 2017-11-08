const config = require('./app/config/config');
const mongoose = require('mongoose');

// Connect to Database
mongoose.connect(config.db, {
  useMongoClient: true
});

// Tell Mongoose to use ES6 promises
mongoose.Promise = global.Promise;

// Connection is successful
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected');
});

// Connection error
mongoose.connection.on('error', function (err) {
console.log(`Mongoose connection error 🙅🏻‍♀️ 🚫 🙅🏻‍♀ 🚫 🙅🏻‍♀️ 🚫 🙅🏻‍♀️→ ${err.message}`);
});

//Disconnected from DB
mongoose.connection.on('disconnected', function () {
console.log('Mongoose disconnected');
});

//import all of your models
require('./app/models/Todo');

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});


module.exports = server;