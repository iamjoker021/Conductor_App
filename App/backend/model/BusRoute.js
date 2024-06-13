const pool = require('../config/db');
const query = require('./queries');

const busRoute = {
    getAllCity : (req, res) => {
        pool.query(query.busRouteQueries.getAllCity)
            .then((result) => {
                res.status(200).json({
                    city_list: result.rows
                })
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({
                    error: "Unable to Fetch City Info",
                    message: error.message
                })
            })
    },
    getBusForCity: (req,res) => {
        const city_id = req.params.id;
        pool.query(query.busRouteQueries.getBusForCity, [city_id])
            .then((result) => {
                if (result.rows.length > 0) {
                    res.status(200).json({
                        bus_list: result.rows
                    })
                } else {
                    res.status(404).json({
                        error: "No result found",
                        message: `Sorry, No Bus found for the City_ID: ${city_id}`
                    })
                }
            })
            .catch((error) => {
                res.status(500).json({
                    error: "Unable to fetch Bus Info",
                    message: error.message
                })
            })
    },
    getRouteAndFareByBus: (req, res) => {
        const bus_id = req.params.id;
        pool.query(query.busRouteQueries.getRouteAndFareByBus, [bus_id])
            .then((result) => {
                if (result.rows.length > 0) {
                    res.status(200).json({
                        route_list_fare: result.rows
                    })
                } else {
                    res.status(404).json({
                        error: "No result found",
                        message: `Sorry, No Route found for the Bus_Id: ${bus_id}`
                    })
                }
            })
            .catch((error) => {
                res.status(500).json({
                    error: "Unable to fetch Bus Info",
                    message: error.message
                })
            })
    }
}

module.exports = busRoute