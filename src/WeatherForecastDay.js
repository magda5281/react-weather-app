import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

  function maxTemperature(){
    let maxTemperature = Math.round(props.dayData.temp.max);
    return (maxTemperature);
  }
    function minTemperature(){
    let minTemperature = Math.round(props.dayData.temp.min);
    return (minTemperature);
  }

  function day(){
    let date = new Date(props.dayData.dt *1000);
    console.log(date)
    let day = date.getDay();
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
     
    return (days[day]); 
  }
  
    return (
        <div className = "WeatherForecastDay">
          <div className="WeatherForecast-day">
            {day()}    
          </div>               
            <WeatherIcon code={props.dayData.weather[0].icon} size={34}/> 
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">{maxTemperature()}º</span>
            <span className="WeatherForecast-temperature-min">{minTemperature()}º</span> 
          </div>   
        </div>
    )
    
}

