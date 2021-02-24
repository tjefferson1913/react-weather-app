import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDetail from "./WeatherDetail";
import WeatherForecast from "./WeatherForecast.js";



export default function Weather(props) {
    const [weatherData,setWeatherData] =useState({ ready: false });
    const [city,setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          city: response.data.name,
          humidity: response.data.main.humidity,
          picUrl: response.data.weather[0].icon,
          description: response.data.weather[0].description,
          date: new Date(response.data.dt * 1000),
          ready: true
        });
      }

      function search() {
        const apiKey = "2936a2aac9698ca0c47a6a60f8ab239e";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      }

        function handleSubmit(event) {
          event.preventDefault();
          search();
        }

        function handleCityUpdate(event) {
          setCity(event.target.value);

        }
      
    
    if (weatherData.ready) {
      return (
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityUpdate}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherDetail data={weatherData} />
          <WeatherForecast city={weatherData.city} />
        </div>
      );
    } else {
      search();
      return "Attempting to Load...";
    }
  }