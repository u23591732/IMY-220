import * as React from 'react';
import { Search } from './Search';
import { Pokemon } from './Pokemon';
import {fetchByName} from '../api';




export class PokemonApp extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
        myPokeData : null,
        pokeName : '',
        error : null
    }
    
    this.handleSearch = this.handleSearch.bind(this);
    
  }

  

  async handleSearch (name : string){
    const result = await fetchByName(name);
    console.log('API Response:', result );
    if (result.error) {
      this.setState({ error: result.error, myPokeData: null });
      
    } else {
      this.setState({ myPokeData : result.pokeData, error: null });
      console.log(`Query was successful : ${this.state.myPokeData}`);
    }
  }
  


  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>; 
    }

    if (!this.state.myPokeData) {
      return (
        <div>
          <h2><strong>Pokemon Finder </strong></h2>
          <br />
          <h3><strong>Search: </strong><Search onSearch={this.handleSearch} /></h3>
          <br />
        </div>
      );
    }

    return (
      <div>
        <h2><strong>Pokemon Finder </strong></h2>
        <br />
        <h3><strong>Search: </strong><Search onSearch={this.handleSearch} /></h3>
        <br />
        <Pokemon pokemon={this.state.myPokeData} />
      </div>
    );
  }
  }
