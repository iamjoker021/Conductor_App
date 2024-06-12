// Import
require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const pool = require('./config/db');
const busRoute = require('./route/busRoute');
const { getAllCityList } = require('./model/BusRoute');

// Init App
const app = express();

// Logging
app.use(morgan('dev'));

// List to PORT
app.listen(process.env.BACKEND_PORT);

// Root
app.get('/', (req, res) => {
    client.query('select 1 as val')
        .then((result) => {
            res.json({
                'Node': 'active and listening to ' + process.env.BACKEND_PORT,
                'DB': 'Connected to DB. Status: ' + result.rows[0].val
            })
        })
        .catch((error) => {
            res.json({
                'Node': 'active and listening to ' + process.env.BACKEND_PORT,
                'DB': 'Connected to DB. Status: 0',
                'error': error.message
            })
        })

})

app.get('/api/bus-route', (req, res) => {
    // res.status(200).json({'status': 'all is well'})
    // console.log(typeof res);
    pool.query('select city_id, city_name from bus_details.city')
        .then((result) => {
            res.status(200).json({
                city: result.rows
            })
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                error: "Unable to Fetch City Info",
                message: error.message
            })
        })
})

app.get('/api/not', getAllCityList)

// app.use('/api/bus-route', busRoute);