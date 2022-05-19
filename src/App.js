// import './App.css';
// import {useEffect, useState} from 'react'
// import axios from 'axios'

// function App() {
//   const [ weatherData, setWeatherData] = useState({
//     temp: 0,
//     feels_like: 1,
//     temp_min: 0,
//     temp_max: 0,
//     weatherMain: "",
//     weatherDescription: "",
//     iconCode: "01d",
//     planeName: "",
//     windSpeed: 0
//   })

//   const [formData, setFormData] = useState ({
//     lat: 0,
//     lon: 0
//   })

//   const [latAndLon, setLatAndLon] = useState ({
//     lat: 38.88,
//     lon: -77.05
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       const resopnse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${formData.lat}&lon=${formData.lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`)
//       const weatherResponse = resopnse.data
//       setWeatherData({
//         temp: weatherResponse.main.temp,
//         feels_like: weatherResponse.main.feels_like,
//         temp_min: weatherResponse.main.temp_min,
//         temp_max: weatherResponse.main.temp_max,
//         weatherMain: weatherResponse.weather[0].main,
//         weatherDescription: weatherResponse.weather[0].description,
//         iconCode: weatherResponse.weather[0].icon,
//         placeName: weatherResponse.name,
//         windSpeed: weatherResponse.wind.speed
//       })
//     }
//      fetchData ();

//   }, [latAndLon])

//   const handleChange = (event) => {
//     setFormData({
//       ...formData, [event.target.name]: event.target.value
//     })
//   }

//   const handleSubmit = (event) =>{
//     event.preventDefault()
//     setLatAndLon(formData)
//   }

//   return (
//     <div className="App">

//     <h2>Temperature: {weatherData.temp}</h2>
//     <h3>Low: {weatherData.temp_min} High: {weatherData.temp_max} </h3>
//     <p>
//       The weather is {weatherData.weatherMain}. <br></br>
//       The description is {weatherData.weatherDescription}. <br></br> The place is {weatherData.placeName}. <br></br> The wind speed is {weatherData.windSpeed} miles per hour. <br></br> You smell like stinky flowers!
//     </p>

//     <img src={`http://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`} />

//     <form onSubmit={formData}>
//       <input name = "lat" id="lat" onChange={handleChange} />
//       <input name= "lon" id="lon" onChange={handleChange} />
//       <input type="submit" />
//     </form>

   



//   </div>
// );
// }

// export default App;

import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [weatherData, setWeatherData] = useState({ //weatherData is our state variable and setWeatherData is a function used to change that variable
    temp: 0,
    feels_like: 0,
    weatherMain: "",
    weatherDescription: "",
    iconCode: "01d",
    placeName: "",
    windSpeed: 0,
  })

  const [formData, setFormData] = useState({
    lat: 0,
    lon: 0
  })

  const [latAndLon, setLatAndLon] = useState({
    lat: 38.88,
    lon: -77.05
  })

  useEffect(() => {
    const fetchData = async () => {
      console.log('test');
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLon.lat}&lon=${latAndLon.lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      const weatherResponse = response.data
      setWeatherData({
        temp: weatherResponse.main.temp,
        feels_like: weatherResponse.main.feels_like,
        weatherMain: weatherResponse.weather[0].main,
        weatherDescription: weatherResponse.weather[0].description,
        iconCode: weatherResponse.weather[0].icon,
        placeName: weatherResponse.name,
        windSpeed: weatherResponse.wind.speed
      })
    }
    fetchData();
  }, [latAndLon])

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLatAndLon(formData)
  }

  
  const f = document.getElementById('foo');
  document.addEventListener('click', function(ev){
      f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
      f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
  },false);


  return (
    <div className="App">
        <div className="weatherWid">      

          <h2>
            {weatherData.temp} °F <br></br>
            {weatherData.placeName} 
          </h2>
          <p className="weatherDetails">
            {/* It feels like {weatherData.feels_like} °F outside. <br></br>
            Wind speed: {weatherData.windSpeed} mph<br></br>
            <br></br> */}
            {weatherData.weatherMain}, {weatherData.weatherDescription}
          </p>
          <img className="weatherIcon" src={`http://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`} />
         
         
          
          <p className="weatherForm">Want to know the weather somewhere else?</p>
          <form onSubmit={handleSubmit}>
            <input name="lat" id="lat" placeholder="  Latitude" onChange={handleChange} /> <br></br>
            <input name="lon" id="lon" placeholder="  Longitude" onChange={handleChange} /> <br></br>
            <input type="submit" />
          </form>
          
          <div id="foo" className="ball"></div>

            </div>
        </div>
      );
    }

export default App;