const pool = require('../config/db')

const getAllCityList = (res, req) => {
    console.log(typeof res);
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
        }

module.exports = {
    getAllCityList
}