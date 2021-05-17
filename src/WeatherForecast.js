import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){

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