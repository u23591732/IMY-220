import React from 'react';
import ReactDOM from 'react-dom';

class PersonList extends React.Component {

    constructor(){
        super(props);
        this.nameInput = ReactDOM.createRef();
        this.surnameInput = ReactDOM.createRef();
        this.submit = this.submit.bind(this);

        
    }

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