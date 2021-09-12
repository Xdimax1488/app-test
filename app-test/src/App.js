import React from "react";
import Info from "./components/info";

import WetheAutt from "./components/wethe _autt";
const API_key = "86ed2a6b04a31b5623197227604accde";
//const London_API = `https://api.openweathermap.org/data/2.5/onecall?lat=51.30&lon=0.07&appid=${API_key}&lang=ru&units=metric`;





class App extends React.Component {
  state = {
    api: undefined,
    ex: undefined,
    temp: undefined,
    city: undefined,
    pressure: undefined,
    error: undefined

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.gettingWether(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getPosition=()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru&units=metric`;
    console.log(API)
    return API
    })
    
  }
  gettingWether =  async() => {
    
    const api_url = await
      fetch(this.getPosition())
      console.log(this.API)
    const date = await api_url.json()
    console.log(date)
    


    this.setState({
      api: date,
      temp: date.current.temp,
      city: date.timezone,
      pressure: date.current.pressure,
      error: ""


    })
  }





  render() {
    return (
      <div className="conteiner">


        <Info />

        <WetheAutt
          temp={this.state.temp}
          city={this.state.city}
          pressure={this.state.pressure}
          error={this.state.error}
          api={this.state.api}
        />

      </div>



    );
  }
}

export default App