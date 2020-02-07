import React, {Component} from 'react';

const API_KEY = '';

export default class Forecast extends Component {

    state = {
        forecast: undefined
    }

    getForecast = async (e) => {
        e.preventDefault();
    
        const city = this.props.city;
        const country = this.props.country;
        const api_call_forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const dataForecast = await api_call_forecast.json();
        console.log(dataForecast);

        this.setState({
            forecast: dataForecast.list
        });
    }

    render() {
        var forecastList;
        if(this.state.forecast) {
            forecastList = this.state.forecast.map((forecast) => {
                
                return (<li>{forecast.dt_txt}: {Math.round(forecast.main.temp_min)}° / {Math.round(forecast.main.temp_max)}°</li>);
            });
        }

        return ( 
            <div>
                <button onClick={this.getForecast}>See detailed forecast</button>
            { this.state.forecast && <ul>{forecastList}</ul> } </div>);
    }
}
