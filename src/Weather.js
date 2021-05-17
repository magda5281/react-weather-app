import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  
  // get the weather data from axios: need to store url in const or let
  // call url via axios and handle response
  // from response you get all data needed
  // instead of creating separate state for each data element create a state and variable to store data in an object
  // handleResponse is calling function setWeatherData which stores value of weather in an object called weather
  // to dispaly weather data in app replace elements in HTML with weatherData object values. 
  // using conditional rendering is necessary otherwise api would be called multiple times 
  // we returning result only when data is ready 
  //apiUrl is called only when ther is no data
  // we have assigned default useState as an object because we are expecting multiple values from response 
  // originally we have created second useState that took care of saying if data is ready or not however 
  // we can assign to useState a boolen in an object that is set as default 
  // that way  we are saying in weatherData that it is ready when we setting the weatherData 
  // so we are saying if weatherData is ready return html with all the data and 
  //if not call api and show response that it is loading


  const [weatherData, setWeatherData]= useState({ready:false});
  const [city, setCity]=useState(props.defaultCity)
  
  function handleResponse(response){

  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    city: response.data.name,
    pressure:response.data.main.pressure,
    humidity:response.data.main.humidity,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    date: new Date(response.data.dt * 1000),
    icon: response.data.weather[0].icon

  })}
  
 
  function Search(){
    const apiKey = "e9c021b631259222d3dcbc9761c3c90c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault()
    Search()
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

if (weatherData.ready) {
  return (
    <div className="Weather">     
      <form onSubmit = {handleSubmit}>
        <div className="row mb-2">
          <div className="col-9">
          <input 
          onChange={handleCityChange}
          type="search"
          placeholder="Enter city"
          className = "form-control"
          autoFocus="on"
          />
          </div>
          <div className="col-3">
          <input
          type = "submit"
          value="Search"
          className ="btn btn-primary w-100"
          />
          </div>
        </div>
      </form>   
      <WeatherInfo data={weatherData}/>     
      <WeatherForecast/>    
    </div> 
    );
} else {
    Search()
  
  return "Loading the weather..."
} 
}