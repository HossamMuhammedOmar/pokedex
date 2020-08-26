import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
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
    let team1 = [];
    let team2 = [...this.props.pokemon];
    while (team1.length < team2.length) {
      let randomIdx = Math.floor(Math.random() * team2.length);
      let randomPokemon = team2.splice(randomIdx, 1)[0];
      team1.push(randomPokemon);
    }

    let exp1 = team1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = team2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={team1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={team2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
