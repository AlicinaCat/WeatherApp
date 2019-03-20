import React, {Component} from 'react';

// stateless component

const Weather = (props) => (
// { 
            // return (
            <div>
                { props.city && props.country && <p>City: {props.city}, Country: {props.country}</p>}
                { props.temperature && <p>Temp: {props.temperature}</p>}
                { props.humidity && <p>Hum: {props.humidity}</p> }
                { props.description && <p>Descr: {props.description}</p> }
                { props.error && <p>{props.error}</p> }
            </div>
);
// }

export default Weather;

// class component

// export default class Weather extends Component {
//     render() {
//         return (
//             <div>
//                 { this.props.city && this.props.country && <p>City: {this.props.city}, Country: {this.props.country}</p>}
//                 { this.props.temperature && <p>Temp: {this.props.temperature}</p>}
//                 { this.props.humidity && <p>Hum: {this.props.humidity}</p> }
//                 { this.props.description && <p>Descr: {this.props.description}</p> }
//                 { this.props.error && <p>{this.props.error}</p> }
//             </div>
//         );
//     }
// }
    // const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=33b94a1d1da5daf4a1643aefc11f0c99');
        
