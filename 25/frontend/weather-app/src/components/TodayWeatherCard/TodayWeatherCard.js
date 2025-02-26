import "./TodayWeatherCard.css";

function TodayWeatherCard(props) {
  const { temp, temp_max, temp_min, humidity, wind } = props.data;

  return (
    <div class="today-weather-card">
      TodayWeatherCard
      <p>{temp}</p>
      <p>{temp_max}</p>
      <p>{temp_min}</p>
      <p>{humidity}</p>
      <p>{wind}</p>
    </div>
  );
}

export default TodayWeatherCard;
