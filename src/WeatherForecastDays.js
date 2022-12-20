import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDays(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={45} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemp()}°</span>
        <span className="WeatherForecast-temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
