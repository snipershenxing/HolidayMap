import { React, useState } from 'react';
import './App.css';
// import './MapContainer.jsx';
import MapContainer from './MapContainer.jsx';
// import Form from './Form.js';
// import Weather from './Weather.js';
// import WeatherCard from './WeatherCard.jsx';
// import Carousel from '../../components/carousel/Carousel.jsx';

function App() {
  // const [weather, setWeather] = useState([])
  // const APIKEY = '13b4c790dbd14cdc94673b267e2ec677';
  // async function fetchData(e) {
  //   e.preventDefault()
  //   const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=LosAngeles,us&APPID=${APIKEY}`)
  //     .then(res => res.json())
  //     .then(data => data)
  //   setWeather({
  //     data: apiData
  //   }
  //   )
  // }
  return (
    <div className="App">
      <h3>Holiday Traffic Estimation</h3>
      <header className="App-header">
        <MapContainer>
        </MapContainer>
      </header>
      {/* <Form getWeather={fetchData} /> */}
      {/* {console.log(weather.data)} */}
      {/* <CarouselWrapper showLoader={request}>
        <Carousel>
          {list.map((day) => <WeatherCard day={day} key={day.date} />)}
        </Carousel>
      </CarouselWrapper> */}
      <footer>Creat by Ethan</footer>
    </div>
  );
}

export default App;
