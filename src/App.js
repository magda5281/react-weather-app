
import './App.css';
import Weather from "./Weather";

export default function App() {


  return (
    <div className="App">
      <div className="container"> 
        <Weather defaultCity = "London"/>
        <footer>
        This project is coded by <a href = "https://www.linkedin.com/in/magdalena-gozdalik-3458202b/" rel="noreferrer" >Magda Gozdalik </a> and is <a href = "https://github.com/magda5281/react-weather-app" target="_blank"rel="noreferrer"> open-sourced on GitHub </a>and hosted on <a href = "https://jovial-swanson-f238a4.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}

 
