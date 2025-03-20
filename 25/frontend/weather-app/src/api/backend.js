import axios from "axios";

export const getWeather = () => {
  return axios.get("http://localhost:8080/api/v1/weather");
};
