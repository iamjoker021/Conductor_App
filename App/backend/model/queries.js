const query = {
    busRouteQueries: {
        getAllCity: `select city_id, city_name 
        from bus_details.city`,
        getBusForCity: `select busid, busname, type 
        from bus_details.busdetails where city_id=$1`,
        getRouteAndFareByBus: `select r.stopid, s.stopname, r.stop_order, r.fare
        from bus_details.routes r
        join bus_details.stops s on s.stopid=r.stopid
        where r.busid=$1
        order by r.stop_order asc`
    }
}

module.exports = query;