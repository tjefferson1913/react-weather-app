import React, { useState } from "react";
import './Weather.css';
import axios from "axios";

export default function Weather(props) {
    const [ready,setReady] = useState(false);
    const [weatherData,setWeatherData] =useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          city: response.data.name,
          humidity: response.data.main.humidity,
          picUrl: "https://ssl.gstatic.com/onebox/weather/64partly_cloudy.png",
          description: response.data.weather[0].description,
          date: "Monday 20:00",
          ready: true
        })
      
    }
    if (weatherData.ready) {
        return(
            <div className="Weather">
                <form>
                  <div className="row">
                    <div className="col-9">
                      <input 
                        type="search" 
                        placeholder="Please enter a city..."
                        className="form-control" 
                        autoFocus="on"
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
                <h1> {weatherData.city} </h1>
                <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">
                  {weatherData.description}</li>
                </ul>
                <div className ="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img
                    src={weatherData.picUrl}
                    alt={weatherData.description}
                    className="float-left"
                />
                <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°F</span>
                </div>
                  </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 5%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind}km/h</li>
                    </ul>
                </div>
                </div>  
                </div> 
        );
    } else {
    
    const apiKey = "2936a2aac9698ca0c47a6a60f8ab239e";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "This is attempting to Load...";
}  
}
