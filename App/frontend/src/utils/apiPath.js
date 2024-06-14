const path = {
    getCity: () => ['/api/bus-details/city', 'city_list'],
    getBusForCity: (city_id) => [`/api/bus-details/city/${city_id}`, 'bus_list'],
    getRouteFareForBus: (bus_id) => [`/api/bus-details/bus-route/${bus_id}`, 'route_list_fare']
};

export {
    path
};