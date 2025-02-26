import "./CityWeatherCard.css";

function CityWeatherCard(props) {
  const { cities } = props;
  return (
    <div className="flex city-weather-card">
      {cities.map((item) => {
        return (
          <div style={{ margin: "0 10px" }}>
            <p>
              {item.min}~{item.max}
            </p>
            <p>{item.city}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CityWeatherCard;
