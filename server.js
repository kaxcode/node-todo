var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./app/config/config');
var cors = require('cors');
const routes = require('./app/router/router');
var app = express();

var opbeat = require('opbeat').start({
    appId: '6e929ed5ae',
    organizationId: '08b69438ac9545a8856cbecc0f2aa3c3',
    secretToken: 'f897ec96785be30fe2952217f4be0305c35c4682'
}); 

app.use(morgan('dev'));                                         // log every request to the console
app.use(cors());
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(opbeat.middleware.express());

// After all that above middleware, we finally handle our own routes!
app.use('/', routes);

var db;

if(process.env.NODE_ENV === "test"){
    db = mongoose.createConnection(config.test_db);
    app.listen(config.test_port);
    console.log("App listening on port "+config.test_port);
}else{
    db = mongoose.createConnection(config.db);
    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
    app.listen(config.port);
    console.log("App listening on port "+config.port);
}

mongoose.createConnection('connected', function () {
    console.log('Mongoose default connection open to ' + config.db);
});

module.exports = app;
