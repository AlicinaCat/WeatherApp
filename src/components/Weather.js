import React, {Component} from 'react';
import Form from './Form';

const API_KEY = '33b94a1d1da5daf4a1643aefc11f0c99';

export default class Weather extends Component {
    state = {
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
    
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call_weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const api_call_forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const dataToday = await api_call_weather.json();
        const dataForecast = await api_call_forecast.json();
    
        // if values are not null
        if (city && country) {
          console.log(dataToday);
          console.log(dataForecast);
    
          this.setState({
            temperature: dataToday.main.temp,
            city: dataToday.name,
            country: dataToday.sys.country,
            humidity: dataToday.main.humidity,
            description: dataToday.weather[0].description,
            tomorrow: dataForecast.list[0].main.temp,
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
                { this.state.city && this.state.country && <p>City: {this.state.city}, Country: {this.state.country}</p>}
                { this.state.temperature && <p>Temp: {this.state.temperature}</p>}
                { this.state.humidity && <p>Hum: {this.state.humidity}</p> }
                { this.state.description && <p>Descr: {this.state.description}</p> }
                { this.state.error && <p>{this.state.error}</p> }
            </div>
        );
    }
}
   




// const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=33b94a1d1da5daf4a1643aefc11f0c99');

