const request = require('request');

const url = 'https://api.weatherstack.com/current?access_key=bd75edf5b57eb75b9a6c467ed00b2153&query=37.8267,-122.4233';

request({ url: url, json:true}, (error, response) => {
    if(error){
        console.log("Unable to access to weather service")
    } else if(response.body.error) {
        console.log("Unable to find the location")
    }
    else {
        console.log("description: " + response.body.current.weather_descriptions[0]);
        console.log("temperature: " + response.body.current.temperature);
        console.log("feelslike: " + response.body.current.feelslike);
    }
})

// Geocoding:
const geoUrl = 'https://geocode.maps.co/search?q=Los%20Angeles&api_key=6707dff830ba2238989261jcnb701e7&';

request({url: geoUrl, json:true}, (error, response) => {
    if(error) {
        console.log("Unable to access the Geocoding service")
    } else if(response.body.length === 0){
        console.log("Wrong location")
    } else {
        console.log("lat: " + response.body[0].lat)
        console.log("lon: " + response.body[0].lon)
    }
})
