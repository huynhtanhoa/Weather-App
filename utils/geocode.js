const request = require("request");

const geoCode = (address, callback) => {
    const url = 'https://geocode.maps.co/search?q=' + encodeURIComponent(address) + '&api_key=6707dff830ba2238989261jcnb701e7& ';

    request({url: url, json:true}, (error, response) => {
        callback(undefined, {
                lat: response.body[0].lat,
                long: response.body[0].lon,
                display_name: response.body[0].display_name
        })
    })
}

module.exports = geoCode