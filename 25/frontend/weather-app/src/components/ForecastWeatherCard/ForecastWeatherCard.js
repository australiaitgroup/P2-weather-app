import "./ForecastWeatherCard.css";
import { WiDaySunny, WiRain, WiCloudy } from "weather-icons-react";

const iconsMap = {
  clear: <WiDaySunny size={24} color="#000" />,
  rain: <WiRain size={24} color="#000" />,
  cloud: <WiCloudy size={24} color="#000" />,
};

function ForecastWeatherCard(props) {
  const { foreCastData } = props;
  return (
    <div className="flex forecast-weather-card">
      {foreCastData.map((item) => {
        const { temp, temp_max, temp_min, weather } = item;
        return (
          <div style={{ margin: "0 10px" }}>
            <p>{item.dt_txt}</p>
            {iconsMap[item.weather[0].main.toLowerCase()]}
            <p>
              {item.main.temp_min}~{item.main.temp_max}
            </p>
            <p>{item.weather[0].main}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastWeatherCard;
