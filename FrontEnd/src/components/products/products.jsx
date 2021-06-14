import React, {Component} from "react";
import axios from "axios";
import products from '../../products.json';

function handleSubmit(event) {

    axios.get('https://pokeapi.co/api/v2/pokemon/' + this.state.input_id).then(r => {

        var data = r.data;
        var types = [];
        for (let i = 0; i < data.types.length; i++) types.push(data.types[i].name);

        const pokemon = {
            id: data.id,
            name: data.name,
            sprite: data.sprites.front_default,
            height: data.height,
            weight: data.weight,
            types: types,
        };

        this.setState({
            pokemon: pokemon
        });

    }).catch(e => {

        console.log(e);

    }); // axios

    event.preventDefault();

 // handleSubmit
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pokemon's id
                    <input type="text" value={this.state.input_id} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Find!"/>
            </form>
            <code>{this.state.pokemon.id}
{this.state.pokemon.name} 
{this.state.pokemon.sprite}
{this.state.pokemon.height}
{this.state.pokemon.weight}
{this.state.pokemon.types}</code>
        </div>
    );
 // render
}