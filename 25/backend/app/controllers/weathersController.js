const weathersServices = require("../services/weathersServices");

exports.index = async (req, res) => {
  const result = await weathersServices.getWeather();
  console.log(result.data);
  res.send(result.data.list);
};
