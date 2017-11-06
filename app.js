const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const routes = require('./app/router/router');
const opbeat = require('opbeat').start({
    appId: '6e929ed5ae',
    organizationId: '08b69438ac9545a8856cbecc0f2aa3c3',
    secretToken: 'f897ec96785be30fe2952217f4be0305c35c4682'
}); 

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(morgan('dev'));                                         // log every request to the console
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(opbeat.middleware.express())

// Routes
app.use('/', routes);

module.exports = app;
