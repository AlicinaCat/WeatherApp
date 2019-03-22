import React, {Component} from 'react';
import Form from './Form';
import Clear from './../pics/Clear.png';
import Rain from './../pics/Rain.png';
import Clouds from './../pics/Clouds.png';
import Snow from './../pics/Snow.png';
import Forecast from './Forecast';

const API_KEY = '33b94a1d1da5daf4a1643aefc11f0c99';

export default class Weather extends Component {
    state = {
        // icon: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        tomorrow: undefined,
        error: undefined
      }
    
      getWeather = async (e) => {
        e.preventDefault();

        this.setState({
            // icon: undefined,
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            tomorrow: undefined,
            error: undefined
        });
    
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call_weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const dataToday = await api_call_weather.json();
    
        // if values are not null
        if (city && country) {
          console.log(dataToday);

          this.setState({
            // icon: dataToday.weather[0].main,
            temperature: Math.round(dataToday.main.temp),
            city: dataToday.name,
            country: dataToday.sys.country,
            description: dataToday.weather[0].description,
            error: ""
          });
        } else {
          this.setState({
            error: "Please enter location."
          });
        }
      }

    render() {

        return (
            <div>
                <Form getWeather={this.getWeather} />
                {/* { this.state.icon && <img src={this.state.icon} alt={this.state.icon} />} */}
                { this.state.city && this.state.country && <p>City: {this.state.city}, Country: {this.state.country}</p>}
                { this.state.temperature && <p>Temp: {this.state.temperature}°</p>}
                { this.state.description && <p>Descr: {this.state.description}</p> }
                { this.state.error && <p>{this.state.error}</p> }
                { this.state.city && <Forecast city={this.state.city} country={this.state.country} />}
            </div>
        );
    }
}
   




// const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=33b94a1d1da5daf4a1643aefc11f0c99');

