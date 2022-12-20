import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherSummary from "./WeatherSummary";
import { Oval } from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    let apiKey = "34b7a5f9e78b04eob5f3acad597t59d2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="row d-flex">
              <div className="col-4">
                <FormattedDate date={weatherData.date} />
              </div>
              <div className="col-4">
                <input
                  type="search"
                  placeholder="Search a city"
                  className="form-control w-100"
                  onChange={updateCity}
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
        <WeatherSummary data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return (
      <Oval
        height={80}
        width={80}
        color="#FFCA2C"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#FFCA2C"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  }
}
