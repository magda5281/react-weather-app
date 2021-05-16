import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit,setUnit]= useState("celsius");

    function convertToCelsius(event){
        event.preventDefault()
        setUnit("celsius")
    }

    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit==="celsius"){
        return (
        <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
           ℃ | 
            <a onClick={convertToFahrenheit} href="/"> ℉
            </a>
            </span>
        </div>
    ); 
    }else {
        let fahrenheit = (props.celsius*9)/5+32
        return (
        <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
            <a onClick={convertToCelsius} href="/">℃
            </a> | 
             ℉
            </span>
        </div>
    );        
    }
}