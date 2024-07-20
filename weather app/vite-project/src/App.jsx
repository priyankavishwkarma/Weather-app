import weatherImg from "./assets/images/weather1.png"
import './App.css'
import { useEffect, useState } from "react"


function App() {
  let [temp, setTemp] = useState(0)
  let [wind, setWind] = useState(0)
  let [humidity, setHumidity] = useState(0)
  let [maxtemp, setMaxtemp] = useState(0)
  let [mintemp, setMintemp] = useState(0)
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '800bb29ce7mshafbf033e5549ed4p119bb3jsnc40c54f82f87',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mathura';

    fetch(url, options)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        let temp = data.temp
        setTemp(temp)
        let wind = data.wind_speed
        setWind(wind)
        let humidity = data.humidity
        setHumidity(humidity)
        let maxtemp = data.max_temp
        setMaxtemp(maxtemp)
        let mintemp = data.min_temp
        setMintemp(mintemp)
      })
      .catch((error) => {
        console.log(error);
      })

    console.log("hello")
  }, []);



  return (
    <>
      <div className="mainbox">
        <div className="topbar">
          <i className="fa-solid fa-plus"></i>
          <h6>Mathura</h6>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="weather-img">
          <img src={weatherImg} alt="" />
        </div>
        <div className="weather-details">
          <p>Tuesday | Jun 18</p>
          <h1 className='temp'>{temp}°</h1>
          <p className='weather-status'>Sunny</p>
          <div className="other-details">
            <div className="detail">
              <i className="fa-solid fa-location-arrow"></i>
              <div>
                <p className='wind'>{wind}km/h</p>
                <p>Wind</p>
              </div>
            </div>
            <div className="detail">
            <i class="fa-solid fa-temperature-full"></i>
              <div>
                <p className='max-temp'>{maxtemp}°</p>
                <p>Max Temperature</p>
              </div>
            </div>
            <div className="detail">
              <i className="fa-solid fa-temperature-half"></i>
              <div>
                <p className='min-temp'>{mintemp}°</p>
                <p>Min temperature</p>
              </div>
            </div>
            <div className="detail">
              <i className="fa-solid fa-droplet"></i>
              <div>
                <p className='humidity'>{humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
