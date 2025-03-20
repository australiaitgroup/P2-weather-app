const axios = require("axios");
const app = require("../config/app");

exports.getWeather = () => {
  const lat = 35;
  const lon = 139;
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${app.openweatherApiKey}`
  );
};
