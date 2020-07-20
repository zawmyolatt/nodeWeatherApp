// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  weather_app_id: process.env.WEATHER_APP_ID,
  weather_unit: process.env.WEATHER_UNIT
};