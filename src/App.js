import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
  const [ weatherData, setWeatherData] = useState({
    temp: 0,
    feels_like: 1,
    temp_min: 0,
    temp_max: 0,
    weatherMain: "",
    weatherDescription: "",
    iconCode: "01d",
    planeName: "",
    windSpeed: 0
  })

  const fetchData = async () => {
    const resopnse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=38.9&lon=-77&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`)
    const weatherResponse = resopnse.data
    setWeatherData({
      temp: weatherResponse.main.temp,
      feels_like: weatherResponse.main.feels_like,
      temp_min: weatherResponse.main.temp_min,
      temp_max: weatherResponse.main.temp_max,
      weatherMain: weatherResponse.weather[0].main,
      weatherDescription: weatherResponse.weather[0].description,
      iconCode: weatherResponse.weather[0].icon,
      placeName: weatherResponse.name,
      windSpeed: weatherResponse.wind.speed
    })
  }

  return (
    <div className="App">

    <h2>Temperature: {weatherData.temp}</h2>
    <h3>Low: {weatherData.temp_min} High: {weatherData.temp_max} </h3>
    <p>
      The weather is {weatherData.weatherMain}. <br></br>
      The description is {weatherData.weatherDescription}. <br></br> The place is {weatherData.placeName}. <br></br> The wind speed is {weatherData.windSpeed} miles per hour. <br></br> You smell like stinky flowers!
    </p>

    <img src={`http://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`} />

<button onClick={fetchData}>Fetch Data</button>

</div>
);
}

export default App;