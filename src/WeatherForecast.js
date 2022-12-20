import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let city = props.city;
  let apiKey = "34b7a5f9e78b04eob5f3acad597t59d2";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon code="few-clouds-day" size={45} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">5°</span>
            <span className="WeatherForecast-temp-min">13°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
