import { useState, useEffect } from "react";
import CityWeatherCard from "../CityWeatherCard/CityWeatherCard";
import ForecastWeatherCard from "../ForecastWeatherCard/ForecastWeatherCard";
import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard";
import "./WeatherMainContainer.css";
import { getWeather } from "../../api/backend";
function WeatherMainContainer() {
  const apiData = {
    temp: 32,
    temp_max: 35,
    temp_min: 31,
    humidity: 2,
    wind: 1,
  };

  const cityData = [
    { min: 18, max: 19, city: "sydney" },
    {
      min: 18,
      max: 19,
      city: "mel",
    },
    {
      min: 18,
      max: 20,
      city: "bri",
    },
    {
      min: 18,
      max: 20,
      city: "perth",
    },
  ];

  const foreCastData = [
    {
      day: "Mon",
      min: 18,
      max: 19,
      weather: "clear",
    },
    {
      day: "Tue",
      min: 18,
      max: 19,
      weather: "rain",
    },
    {
      day: "Wed",
      min: 18,
      max: 20,
      weather: "cloud",
    },
    {
      day: "Thu",
      min: 18,
      max: 20,
      weather: "cloud",
    },
  ];
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getWeather();
      setData(result.data);
    };
    fetchData();
  }, []);
  if (!data) {
    return <></>;
  }
  return (
    <div className="weather-main-container">
      <TodayWeatherCard data={data[0]} />
      <div className="flex">
        <CityWeatherCard cities={cityData} />
        <ForecastWeatherCard
          foreCastData={data.filter((item) => item.dt_txt.includes("12:00:00"))}
        />
      </div>
    </div>
  );
}

export default WeatherMainContainer;
