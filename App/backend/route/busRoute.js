const { Router } = require("express");
const busRoute = require('../model/BusRoute');

const router = Router();

router.get('/', busRoute.getAllCity);

module.exports = router;