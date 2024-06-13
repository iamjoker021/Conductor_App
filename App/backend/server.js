// Import
require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const busRoute = require('./route/busRoute');

// Init App
const app = express();

// Logging
app.use(morgan('dev'));

// List to PORT
app.listen(process.env.BACKEND_PORT);

app.use('/api/bus-details', busRoute);