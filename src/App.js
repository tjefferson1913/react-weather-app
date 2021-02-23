import React from "react";
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Miami"/>
      <footer>
        This project is created by Tiara J and on {" "}
      <a href="https://github.com/tjefferson1913/react-weather-app"
      target="_blank"
      >
        Github
        </a>
      </footer>
      </div> 
    </div>
  );
}


