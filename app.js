const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New York', (error, data) => {
    console.log('Error: ' + error)
    console.log('Data: ' + JSON.stringify(data))
    forecast(data.lat, data.lon, (error, response) => {
        console.log(response)
    })
})

