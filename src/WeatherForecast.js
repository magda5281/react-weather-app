import React, {useState, useEffect} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  const [forecastData, setForecastData] =useState(null);
  const [loaded, setLoaded]= useState(false);

    useEffect(() => {
    setLoaded(false)
  },[props.coordinates])

  function handleResponse(response){
    setForecastData(response.data.daily);
    setLoaded(true);
   
  }
 
  if (loaded){

      return (
        <div className="WeatherForecast">
          <div className="row">
            {forecastData.map(function(dailyForecast, index){
              if (index<6){
                  return (
                  <div className="col" key="index">               
                    <WeatherForecastDay dayData={dailyForecast}/>             
                  </div>);
              }else{
                return null;
              }
            
            })}

          </div>
        </div>      
    );
  }else{
    let apiKey = "e9c021b631259222d3dcbc9761c3c90c";
    let latitude= props.coordinates.lat;
    let longitude= props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;

  }
}