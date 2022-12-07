import React from "react";
import ReactDOM from "react-dom/client";
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
          <div className="App">
            <Form />
            <hr />
            <Cities />
            <WeatherSummary />
            <hr />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
