import React from "react";

export default function WeatherSummary(props) {
  return (
    <div>
      {" "}
      <div>
        <h3>Currently in...</h3>
        <h1>{props.data.city}</h1>
      </div>
      <div className="row ">
        <div className="col-3 icon-summary">
          <img src={props.data.icon} alt={props.data.description} />
          <div className="description">{props.data.description}</div>
        </div>
        <div className="col-5">
          <div className="weather-temperature">
            <span className="main-temp">
              <strong>{Math.round(props.data.temperature)}</strong>
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
                <span className="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind:{" "}
                <span className="wind">{Math.round(props.data.wind)}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
