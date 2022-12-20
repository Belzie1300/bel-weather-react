import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].time}</div>
            <WeatherIcon code={forecast[0].condition.icon} size={45} />
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {forecast[0].temperature.maximum}°
              </span>
              <span className="WeatherForecast-temp-min">
                {forecast[0].temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.city;
    let apiKey = "34b7a5f9e78b04eob5f3acad597t59d2";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
