const pool = require('../config/db');
const query = require('./queries');

const busRoute = {
    getAllCity : (req, res) => {
        pool.query(query.busRouteQueries.getAllCity)
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
        }
}

module.exports = busRoute