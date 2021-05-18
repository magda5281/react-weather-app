import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
  
  const [forecastData, setForecastData] =useState({loaded:false})

  function handleResponse(response){
    setForecastData({
      loaded: true,
      max:response.data.daily[0].temp.max,
      min:response.data.daily[0].temp.min,
      day:new Date(response.data.daily[0].dt*1000),
      icon: response.data.daily[0].weather[0].icon
    });
    
  }

  function formatDay(props){

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    let forecastDay = days[props.forecastData.day.getDay()];
    return forecastDay;

  }

  if (forecastData.loaded){
      return (
        <div className="WeatherForecast">
          <div className="row">
              <div className="col">
                <div className="WeatherForecast-day">
                 {formatDay(forecastData.day)}
                </div>
                <WeatherIcon code={forecastData.icon} size={34}/> 
                <div className="WeatherForecast-temperature">
                  <span className="WeatherForecast-temperature-max">{Math.round(forecastData.max)}º</span>
                  <span className="WeatherForecast-temperature-min">{Math.round(forecastData.min)}º</span> 
                </div>   
              </div>
          </div>
        </div>
       
    );
  }else{
    let apiKey = "e9c021b631259222d3dcbc9761c3c90c";
    let latitude= props.coordinates.lat;
    let longitude= props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metrics`;
    axios.get(apiUrl).then(handleResponse);

    return null;

  }
  
}