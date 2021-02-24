import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherDetail(props) {
    return (
        <div className="WeatherDetail">
    <h1> {props.data.city} </h1>
    <ul>
    <li>
      <CurrentDate date={props.data.date} />
    </li>
    <li className="text-capitalize">
      {props.data.description}</li>
    </ul>
    <div className ="row mt-3">
    <div className="col-6">
        <div className="clearfix">
        <img
        src={props.data.picUrl}
        alt={props.data.description}
        className="float-left"
    />
    <div className="float-left">
    <span className="temperature">{Math.round(props.data.temperature)}</span>
    <span className="unit">°F</span>
    </div>
      </div>
    </div>
    <div className="col-6">
        <ul>
            <li>Precipitation: {props.data.humidity}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
        </ul>
    </div>
    </div>  
    </div>
 
); 
}