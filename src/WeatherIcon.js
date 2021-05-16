
import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
 
    const iconMapping = {
        "01d":`CLEAR_DAY`,
        "01n":`CLEAR_NIGHT`,
        "02d":`PARTLY_CLOUDY_DAY`,
        "02n":`PARTLY_CLOUDY_NIGHT`,
        "03d":`PARTLY_CLOUDY_DAY`,
        "03n":`PARTLY_CLOUDY_NIGHT`,
        "04d":"PARTLY_CLOUDY_DAY",
        "04n":"PARTLY_CLOUDY_NIGHT",
        "09d":"RAIN",
        "09n":"RAIN",
        "10d":"RAIN",
        "10n":"RAIN",
        "11d":"RAIN",
        "11n":"RAIN",
        "13d":"SNOW",
        "13n":"SNOW",
        "50d":"FOG",
        "50n":"FOG",
    };
return (
        <ReactAnimatedWeather
        icon={iconMapping[props.code]}
        color="#0B5ED7"
        size = {64}
        animate = {true}
  />
  );
}

 



