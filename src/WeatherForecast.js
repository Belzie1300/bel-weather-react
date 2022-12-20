import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDays from "./WeatherForecastDays";

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
            <WeatherForecastDays data={forecast[0]} />
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
