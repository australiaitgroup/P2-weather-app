import "./ForecastWeatherCard.css";

function ForecastWeatherCard(props) {
  const { foreCastData } = props;
  return (
    <div className="flex forecast-weather-card">
      {foreCastData.map((item) => {
        return (
          <div style={{ margin: "0 10px" }}>
            <p>
              {item.min}~{item.max}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastWeatherCard;
