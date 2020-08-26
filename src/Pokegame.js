import React, { Component } from 'react';

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
      let randomPokemon = team2.splice(randomIdx, 1);
      team1.push[randomPokemon];
    }
    console.log(team1);
    console.log(team2);
    return (
      <div>
        <h1>Pokegame!</h1>
      </div>
    );
  }
}

export default Pokegame;
