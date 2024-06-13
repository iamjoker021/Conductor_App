const query = {
    busRouteQueries: {
        getAllCity: `select city_id as value, city_name as label
        from bus_details.city`,
        getBusForCity: `select busid as value, busname as label, type 
        from bus_details.busdetails where city_id=$1`,
        getRouteAndFareByBus: `select r.stopid as value, s.stopname as label, r.stop_order, r.fare
        from bus_details.routes r
        join bus_details.stops s on s.stopid=r.stopid
        where r.busid=$1
        order by r.stop_order asc`
    }
}

module.exports = query;