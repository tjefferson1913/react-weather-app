import React from "react";
import WeatherImage from "./WeatherImage";

export default function WeatherForecastSummary(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="WeatherForecastSummary col">
      {hours()}
      <WeatherImage code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}