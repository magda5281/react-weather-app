import React from 'react';

export default function FormatedDate(props){

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let months = ["January", "February","March","April","May","June", "July","August","September","October","November","December"]
    let month = months[props.date.getMonth()];
    let year= props.date.getFullYear();
    let hour= props.date.getHours();
    if (hour<10){
        hour=`0${hour}`;
    }
    let minutes=props.date.getMinutes();
     if (minutes<10){
        minutes=`0${minutes}`;
    }

    return (<li className ="date">
        {day}, {date} {month} {year}, {hour}:{minutes}

    </li>
)}