import React from "react";

export default function TempConversion(props) {
  return (
    <div className="weather-temperature">
      <span className="main-temp">
        <strong>{Math.round(props.celsius)}</strong>
      </span>
      <span className="unit">°C</span>
    </div>
  );
}
