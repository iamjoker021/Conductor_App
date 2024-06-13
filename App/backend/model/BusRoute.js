const pool = require('../config/db');
const query = require('./queries');

const pool_query = (req, res, query, attribute, param=[]) => {
    pool.query(query, param)
        .then((result) => {
            if (result.rows.length > 0) {
                const output = { status: true }
                output[attribute] = result.rows
                res.status(200).json(output)
            } else {
                res.status(404).json({
                    status: false,
                    error: "No result found",
                    message: `Sorry, ${attribute} not found`
                })
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                status: false,
                error: `Unable to Fetch ${attribute} Info`,
                message: error.message
            })
        })
}

const busRoute = {
    getAllCity: (req, res) => pool_query(req, res, query.busRouteQueries.getAllCity, 'city_list'),
    getBusForCity: (req, res) => {
        const city_id = req.params.id
        pool_query(req, res, query.busRouteQueries.getBusForCity, 'bus_list', [city_id])
    },
    getRouteAndFareByBus: (req, res) => {
        const bus_id = req.params.id;
        pool_query(req, res, query.busRouteQueries.getRouteAndFareByBus, 'route_list_fare', [bus_id])
    }
}

module.exports = busRoute