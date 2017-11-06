const config = require('./app/config/config');
const mongoose = require('mongoose');

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log('🛑 🌮 🐶 💪 💩\nHey You! \n\t ya you! \n\t\tBuster! \n\tYou\'re on an older version of node that doesn\'t support the latest and greatest things we are learning (Async + Await)! Please go to nodejs.org and download version 7.6 or greater. 👌\n ');
  process.exit();
}

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
