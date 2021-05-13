import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
    <div className="Weather">
      
      <form>
        <div className="row mb-2">
          <div className="col-9">
          <input 
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
      <h1>
        Warsaw
      </h1>
      <ul>
          <li className ="date">
            Thursday, 13 May 2021, 11:38
          </li>
          <li className = "description">
            Broken clouds
          </li>
      </ul>
      <div className = "row clearfix justify-content-between">
          <div className = "col-6 clearfix">
            <img src = "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt = "Broken clouds" className="mainImg"/>
            <span className="temperature">11</span><span className="units">℃</span>
          </div>
          <div className="col-6">
            <ul className= "conditions px-5">
              <li>
                Humidity: 80%
              </li>
              <li>
                Wind: 8 km/h
              </li>
              <li>
                Pressure: 1008 hPa
              </li>
            </ul>
          </div>
      </div>
    </div> 
    )
}