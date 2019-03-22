import React, { Component } from 'react';

export default class Favorites extends Component {


    state = {
        favorites: []
    }


    render() {
        var favorites = localStorage.getItem('favorites');
        let array = JSON.parse(favorites);
        console.log(array);

        let favoriteList = array.map((city) => {
            return <li>{city}</li>
        });

        return (
            <div>
                <h1>Favorites</h1>
                <p>List of cities</p>
                {this.state.favorites && <ul>{favoriteList}</ul>}
            </div>);
    }
}

