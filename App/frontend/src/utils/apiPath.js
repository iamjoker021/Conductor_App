const path = {
    getCity: () => '/api/bus-details/city',
    getBusForCity: (city_id) => `/api/bus-details/city/${city_id}`
};

export {
    path
};