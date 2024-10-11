import React from 'react';

export class Search extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
        searchQuery: '',
        error: null,
      };
      this.handleInputChange = this.handleInputChange.bind(this.handleInputChange);
      this.handleSearch = this.handleSearch.bind(this.handleSearch);
  }
      

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearch = (event) => {
    event.preventDefault(); 

    const searchQuery  = this.state.searchQuery;

   
    if (!searchQuery.trim()) {
      this.setState({ error: 'Search query cannot be empty.' });
      return;
    }

    
    this.setState({ error: null });
    this.props.onSearch(searchQuery); 
  };

  render() {
    const { searchQuery, error } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            width="800"
            placeholder="Enter name"
            value={searchQuery}
            onChange={this.handleInputChange} 
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>} 
      </div>
    )
  }
}
