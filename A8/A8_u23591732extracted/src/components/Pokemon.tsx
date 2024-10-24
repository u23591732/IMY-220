import * as React from 'react';

interface PokemonType
{
    slot:number,
    type : {
        name : string,
        url : string
    }
}

interface myPokemon{
     id:number,
     name:string,
     height:number,
     weight:number,
     types : Array <PokemonType>
}

interface PokemonObj{
    pokemon : myPokemon | null
}
export class Pokemon extends React.Component<PokemonObj,{}> {
  constructor(props : PokemonObj) {
    super(props);
    
  }


  render() {
    

    if (!this.props.pokemon) {
      return <div></div>;
    }
   

    return (

      
      <div>

       
        <h1><strong>Pokemon </strong></h1> 
        <br/>
        <h2><strong>This is {this.props.pokemon.name}</strong></h2>
        
        <h3><strong>ID : {this.props.pokemon.id}</strong></h3>
        
        <h3>Height: {this.props.pokemon.height}</h3>
        
        <h3>Weight: {this.props.pokemon.weight}</h3>
       
        <h3>Types: {this.props.pokemon.types.map((pType,i) => {
            return <li key={i}>{pType.type.name} ( <a href={pType.type.url}> more info</a> )</li>
        })}</h3>
        
      </div>
    );
  }
}