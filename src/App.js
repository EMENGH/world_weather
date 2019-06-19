import React from 'react';
import Headings from "./components/Headings.js";
import Form from "./components/Form.js";
import Climate from "./components/Climate.js";
import './App.css';
import MediaQuery from 'react-responsive';
//import styled from 'styled-components';

//import {Wrapper}  from './basicSty/styles'
const API_KEY= "fbc1ec7cb112db306e861d05c4fa2523";

class App extends React.Component{
  state = {
    city: undefined,
    country:  undefined,
    temperature: undefined,
    maxtemp: undefined,
    mintemp: undefined,
    humidity: undefined,
    // wind: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    
    if (data.message) {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        maxtemp: undefined,
        mintemp: undefined,
        humidity: undefined,
        description: undefined,
        error: data.message.charAt(0).toUpperCase() + data.message.substr(1)
      });
          
      return false;
    }

    if (city && country) {

      this.setState({
        city: data.name,
        country: data.sys.country, 
        temperature: data.main.temp,
        maxtemp: data.main.temp_max,
        mintemp: data.main.temp_min,
        humidity: data.main.humidity,
        // wind: data.wind,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined, 
        temperature: undefined,
        maxtemp: undefined,
        mintemp: undefined,
        humidity: undefined,
        // wind: undefined,
        description: undefined,
        error: "Please enter city and country"
      });      
    }
  }
  render(){
    return(
      <div> 
         <div className="wrapper">
           {/* <div className="main"> */}
             <div className="container">
                {/*<div className="row">*/}
                  <div className="col-xs-5 title-container">
                    <Headings />
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>
                    <Climate 
                      city={this.state.city}
                      country={this.state.country}
                      temperature={this.state.temperature}
                      maxtemp={this.state.maxtemp}
                      mintemp={this.state.mintemp}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}  
                    />
                  </div>
                {/*</div>*/}
             </div>
         </div>
      </div>

    );
  }
};

export default App;