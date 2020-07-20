const config = require('./config');
const request = require('request')

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

const forecast = (address, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ address +'&APPID='+ config.weather_app_id +'&units=' + config.weather_unit;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.cod === "404") {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, capitalize(address) + ' : ' +body.weather[0].main + '. It is currently ' + body.main.temp + ' C. There is humidity ' + body.main.humidity + '%.')
        }
    })
}

module.exports = forecast