const request = require('request');

const url = 'https://api.weatherstack.com/current?access_key=bd75edf5b57eb75b9a6c467ed00b2153&query=37.8267,-122.4233';

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current);
})

console.log("Stopping");