import React, { useState } from "react";
import "./WeatherSummary.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function WeatherSummary(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="WeatherSummary">
        <div>
          <form>
            <div className="row d-flex">
              <div className="col-4">
                <FormattedDate date={weatherData.date} />
              </div>
              <div className="col-4">
                <input
                  type="search"
                  placeholder="Search a city"
                  className="form-control w-100"
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-warning w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <hr />
        <div className="Cities">
          <h3>Currently in...</h3>
          <h1>{weatherData.city}</h1>
        </div>
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
    let apiKey = "34b7a5f9e78b04eob5f3acad597t59d2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Please wait...";
  }
}
