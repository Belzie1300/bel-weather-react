import React, { useState } from "react";
import "./WeatherSummary.css";
import axios from "axios";

export default function WeatherSummary() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherSummary">
        <div className="row ">
          <div className="col-3 icon-summary">
            <img src={weatherData.icon} alt={weatherData.description} />
            <div className="description">{weatherData.description}</div>
          </div>
          <div className="col-5">
            <div className="weather-temperature">
              <span className="main-temp">
                <strong>{Math.round(weatherData.temperature)}</strong>
              </span>
              <span className="unit">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col-4">
            <div>
              <ul className="main-overview">
                <li>
                  Humidity:{" "}
                  <span className="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind:{" "}
                  <span className="wind">{Math.round(weatherData.wind)}</span>{" "}
                  km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Osaka";
    let apiKey = "34b7a5f9e78b04eob5f3acad597t59d2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Please wait...";
  }
}
