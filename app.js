const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2]

if (!address) {
    return console.log("Please enter the location")
} else {
    geocode(address, (error, {lat, lon, display_name}) => {

        if (error) {
            return console.log("Error: ", error)
        }

        forecast(lat, lon, (error, data) => {
            if (error) {
                return console.log("Error", error)
            }
            console.log("Place: ", display_name)
            console.log("Data: ", data)
        })
    })
}