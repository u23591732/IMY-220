import React from 'react';

export class Person extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    const { name, birthYear, eyeColor, gender , homeworld } = this.props;
   

    return (
      <div>
        <h2><strong>Person</strong></h2>
        <p><strong>{name}</strong></p>
        <p>Birth Year: {birthYear}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Gender: {gender}</p>
        <p>Homeworld: {homeworld}</p>
      </div>
    );
  }
}