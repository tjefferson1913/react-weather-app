import React, { useState } from "react";
import WeatherForecastSummary from "./WeatherForecastSummary";
import WeatherImage from "./WeatherImage";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
          <div className="col">
        <WeatherForecastSummary data={Math.round(forecast.list[0])} />
        <WeatherForecastSummary data={Math.round(forecast.list[1])} />
        <WeatherForecastSummary data={Math.round(forecast.list[2])} />
        <WeatherForecastSummary data={Math.round(forecast.list[3])} />
        <WeatherForecastSummary data={Math.round(forecast.list[4])} />
        <WeatherForecastSummary data={Math.round(forecast.list[5])} />
      </div>
      </div>

    );
  } else {
    let apiKey = "2936a2aac9698ca0c47a6a60f8ab239e";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}