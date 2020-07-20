const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    forecast(address, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }

        console.log(address)
        console.log(forecastData)
    })
}
