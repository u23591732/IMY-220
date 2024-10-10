import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component {
  render() {
    const person = this.props.person;
    const name = person.name;
    const surname = person.surname;
    return (
      <li>
        {`${name[0]} . ${surname}`};
      </li>
    );
  }
}

