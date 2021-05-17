import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

  function handleResponse(response){
    console.log(response.data);
  }

  let apiKey = "e9c021b631259222d3dcbc9761c3c90c";
  let latitude= props.coordinates.lat;
  let longitude= props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metrics`;
  axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
          <div className="row">
              <div className="col">
                <div className="WeatherForecast-day">
                  Mon
                </div>
                <WeatherIcon code="01d" size={34}/> 
                <div className="WeatherForecast-temperature">
                  <span className="WeatherForecast-temperature-max">10º</span>
                  <span className="WeatherForecast-temperature-min">7º</span> 
                </div>   
              </div>
          </div>
        </div>
       
    )
}