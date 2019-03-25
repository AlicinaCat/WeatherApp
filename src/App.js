import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/Weather';
import { Switch, Route, Router, NavLink } from 'react-router-dom';

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
                  {/* <Switch>
                    <Route exact path='/' component={Weather} city={this.state.city} />
                  </Switch> */}
                  <Weather />
                </div>
                {/* <div className="col form-container">
                  <Favorites />
                </div> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
