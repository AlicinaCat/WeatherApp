import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/Weather';
import Titles from './components/Favorites';

class App extends Component {
  // initial state
  

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">

                <div className="col form-container">
                  <Weather />
                </div>
                <div className="col form-container">
                  <Titles />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
