const express = require('express');
// const busRouteModel = require('../model/BusRoute');
const pool = require('../config/db')

const router =  express.Router();

router.get('/', (res, req) => {
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
});

module.exports = router;