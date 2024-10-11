const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=bd75edf5b57eb75b9a6c467ed00b2153&query='+ lat +','+ long

    request({url:url, json:true}, (error, response) => {
        callback(undefined, {
            description: response.body.current.weather_descriptions[0],
            temperature: response.body.current.temperature,
            feelslike: response.body.current.feelslike
        })
    })
}

// forecast(lat, long, (error, response) =>{
//     console.log('')
// })

module.exports = forecast
