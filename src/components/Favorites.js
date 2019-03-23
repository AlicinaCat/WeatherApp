import React, { Component } from 'react';

export default class Favorites extends Component {

    state = {
        favorites: [],
    }

    render() {
        var favorites = localStorage.getItem('favorites');
        let array = JSON.parse(favorites);
        console.log(array);
        var favoriteList;
        if (array != null) {
            favoriteList = array.map((city) => {
                let name = city.split(':');
                return <li>{name[0]}, {name[1]}</li>
            });
        }


        return (
            <div>
                <h1>Favorites</h1>
                <p>List of cities</p>
                {this.state.favorites && <ul>{favoriteList}</ul>}
            </div>);
    }
}

