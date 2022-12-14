import React from "react";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";
export default function WeatherSummary(props) {
  return (
    <div>
      {" "}
      <div>
        <h3>Currently in...</h3>
        <h1>{props.data.city}</h1>
      </div>
      <br />
      <div className="row ">
        <div className="col-3 icon-summary">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <div className="description">{props.data.description}</div>
        </div>
        <div className="col-5">
          <TempConversion celsius={props.data.temperature} />
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
