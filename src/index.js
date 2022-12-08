import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Form from "./Form";
import WeatherSummary from "./WeatherSummary";
import Cities from "./Cities";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Form />
          <hr />
          <Cities />
          <WeatherSummary defaultCity="Osaka" />
          <hr />
        </div>
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
