import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    console.log("App: Component Mounted");
    setTimeout(()=> {
      this.setState({
        pokemon: data
      });
    }, 500);
  }
  
  render() {
    console.log("App: DOM rendered");
    return (
      <div className="App">
        {
          (this.state.pokemon.length < 1)?<div>Loading</div>:<Pokemon pokemon={this.state.pokemon} />
        }
      </div>
    );
  }
}

export default App;

