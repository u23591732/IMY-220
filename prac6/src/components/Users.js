import React from 'react'
import {Posts} from './components/Posts'
export class Users extends React.Component{



    constructor(props)
    {
        super(props);
        this.state = {
          usersData: null,
        error:null};
    }

   
      
      fetchUserData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(response => response.json())
          .then(data => {
            if (data.results.length > 0) {
              this.setState({ usersData: data.results, error: null });
            } else {
              this.setState({ usersData: null, error: 'No user data found' });
            }
          })
          .catch(error => this.setState({ error: 'Error fetching data' }));
      };

      render()
      {
       
      const { usersData, error } = this.state;

    return (
      <div>
        {error && <p>{error}</p>}
        {usersData ? (
          <div>
            
            <ul style={{listStyleType:'none'}}>

        {this.usersData.map((post,i) =>
         (
         <li key= {i} ><Posts key= {i} id = {i} /></li>
         ))}


</ul>
            
            
          </div>
        ) : (
          <p>User results</p>
        )}
      </div>
    );
  }
}