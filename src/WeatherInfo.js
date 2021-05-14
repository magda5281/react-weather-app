import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props){
    return (
        <div className = "WeatherInfo">
        <h1>
        {props.data.city}
      </h1>
      <ul>
          <FormatedDate date={props.data.date}/>       
          <li className = "description">
          {props.data.description}
          </li>
      </ul>
      <div className = "row clearfix justify-content-between">
          <div className = "col-6 clearfix">
            <img src = {props.data.icon}
            alt =  {props.data.description} className="mainImg"/>
            <span className="temperature">{Math.round(props.data.temperature)}</span><span className="units">℃</span>
          </div>
          <div className="col-6">
            <ul className= "conditions px-5">
              <li>
                Humidity: {Math.round(props.data.humidity)}%
              </li>
              <li>
                Wind: {Math.round(props.data.wind)}m/s
              </li>
              <li>
                Pressure: {Math.round(props.data.pressure)}hPa
              </li>
            </ul>
          </div>
      </div>
      </div>
    )
}