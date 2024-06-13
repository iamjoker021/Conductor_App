const { Router } = require("express");
const busRoute = require('../model/BusRoute');

const router = Router();

router.get('/city', busRoute.getAllCity);

router.get('/city/:id', busRoute.getBusForCity);

router.get('/bus-route/:id', busRoute.getRouteAndFareByBus)

module.exports = router;