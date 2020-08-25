import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 717, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 5, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 719, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 9, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 212, name: 'DengePeng', type: 'flying', base_experience: 178 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <div className="Pokedex-cars">
          {this.props.pokemon.map((p) => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;