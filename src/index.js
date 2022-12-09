import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import WeatherSummary from "./WeatherSummary";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <WeatherSummary defaultCity="Osaka" />
        </div>
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
