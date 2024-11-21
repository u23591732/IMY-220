import React from 'react'

export class Posts extends React.Component{



    constructor(props)
    {
        super(props);
        this.state = {
          postData: null,
        error:null};
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id && this.props.id) {
          this.fetchPersonData(this.props.id);
        }
      }
    
      
      fetchPersonData = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
          .then(response => response.json())
          .then(data => {
            if (data.results.length > 0) {
              this.setState({ postData: data.results, error: null });
            } else {
              this.setState({ postData: null, error: 'No post data found' });
            }
          })
          .catch(error => this.setState({ error: 'Error fetching data' }));
      };

      render()
      {
       
      const { personData, error } = this.state;

    return (
      <div>
        {error && <p>{error}</p>}
        {postData ? (
          <div>
            <h2>User ID : {postData.userId}</h2>
            <p>ID: {postData.id}</p>
            <p>Title: {postData.title}</p>
            <p>Body: {postData.body}</p>
            
            
          </div>
        ) : (
          <p>User results</p>
        )}
      </div>
    );
  }
}