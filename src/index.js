import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./Form";
import WeatherSummary from "./WeatherSummary";
import Cities from "./Cities";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div className="App">
            <Form />
            <hr />
            <Cities />
            <WeatherSummary />
            <hr />
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
