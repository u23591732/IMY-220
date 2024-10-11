import React from 'react';
import { fetchByID, fetchByName } from '../api';
import {Person} from './Person';
import {Search} from './Search';

export class StarWars extends React.Component {
 constructor(props)
 {
    super(props)
    {
        this.state = {
            characterData: null,
            currentId: 1, 
            error: null,
          };

          this.fetchCharacter = this.fetchCharacter.bind(this);
          this.handleSearch = this.handleSearch.bind(this);
          this.handleNext= this.handleNext.bind(this);
          this.handlePrevious = this.handlePrevious.bind(this);


    }
 }

  async componentDidMount() {
   
    this.fetchCharacter(this.state.currentId);
  }

  
  async fetchCharacter(id){
  if (id <= 0) {
    this.setState({ error: 'Character ID must be greater than 0.', characterData: null });
    return;
  }

  const result = await fetchByID(id);
  if (result.error) {
    this.setState({ error: result.error, characterData: null });
  } else {
    this.setState({ characterData: result.postData, error: null });
  }
};

async handleNext(){
  const { currentId } = this.state;
  const newId = currentId + 1;
  this.setState({ currentId: newId });
  await this.fetchCharacter(newId);
};

async handlePrevious(){
  const { currentId } = this.state;
  const newId = currentId - 1;
  this.setState({ currentId: newId });
  await this.fetchCharacter(newId);
};

  
  async handleSearch (name){
    const result = await fetchByName(name);
    if (result.error) {
      this.setState({ error: result.error, characterData: null });
    } else {
      this.setState({ characterData: result.postData, error: null });
    }
  }

  render() {
    const { characterData, error, currentId } = this.state;

    return (
      <div>
        <h1>Activity Feed</h1>
        <br/>
        <br/>

        <h3>Search</h3>

       
        <Search onSearch={this.handleSearch} />
        <br/>
        <div>
          <button
            onClick={this.handlePrevious}
            disabled={currentId <= 1} 
          >
            Previous
          </button>
           &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
          <button onClick={this.handleNext}>
            Next
          </button>
        </div>

        
        {error && <p style={{ color: 'red' }}>{error}</p>}

        
        {characterData && (
          <Person
            name={characterData.name}
            birthYear={characterData.birth_year}
            eyeColor={characterData.eye_color}
            gender={characterData.gender}
            homeworld={characterData.homeworld}
          />
        )}

       
      
      </div>
    );
  }
}
