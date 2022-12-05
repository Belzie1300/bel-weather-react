import React from "react";
import "./WeatherSummary.css";

export default function WeatherSummary() {
  let weatherData = {
    city: "Osaka",
    temp: 18,
    date: "Wednesday 15:00",
    maxTemp: 21,
    minTemp: 11,
    description: "Clear",
    humidity: 40,
    wind: 5,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="WeatherSummary">
      <div className="row ">
        <div className="col-3 icon-summary">
          <img src={weatherData.iconUrl} alt={weatherData.description} />
          <div className="description">{weatherData.description}</div>
        </div>
        <div className="col-5">
          <div className="weather-temperature">
            <span className="main-temp">
              <strong>{weatherData.temp}</strong>
            </span>
            <span className="unit">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-4">
          <div>
            <div>
              <ul className="main-overview">
                <li>
                  Max:{" "}
                  <span className="main-overview-max">
                    {weatherData.maxTemp}
                  </span>
                  °C
                </li>
                <li>
                  Min:{" "}
                  <span className="main-overview-min">
                    {weatherData.minTemp}
                  </span>
                  °C
                </li>
              </ul>
            </div>
            <ul className="main-overview">
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
