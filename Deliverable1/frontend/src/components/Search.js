import React from 'react';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      error: '',
      results: {
        songs: [],
        users: [],
        playlists: []
      }
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ searchTerm: value, results: { songs: [], users: [], playlists: [] } }); // Clear previous results

    if (value.trim() === '') {
      this.setState({ error: 'Please enter a valid search term' });
    } else {
      this.setState({ error: '' });
    }
  };

  validateSearch = () => {
    const { searchTerm } = this.state;
    if (searchTerm.trim() === '') {
      this.setState({ error: 'Please enter a valid search term' });
      return false; // Return false to indicate invalid search
    } else {
      this.setState({ error: '' });
      return true; // Return true for a valid search
    }
  };

  handleSearch = async (event) => {
    event.preventDefault();
    if (this.validateSearch()) {
      const { searchTerm } = this.state;
      try {
        const response = await fetch(`/search?q=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        this.setState({ results: data }); // Update results with fetched data
      } catch (error) {
        console.error("Error fetching search results:", error);
        this.setState({ error: 'Error fetching search results' });
      }
    }
  };

  render() {
    const { searchTerm, error, results } = this.state;

    return (
      <div style={{ display: 'flex', backgroundColor: '#3F6751', alignItems: 'center', paddingTop: '15px', justifyContent: 'center' }}>
        <img 
          src='./assets/images/search.jpg' 
          style={{ height: '35px', width: '35px', borderRadius: '50%' }} 
          alt="Search Icon"
        /> &nbsp; &nbsp; &nbsp;
        <input 
          type="text" 
          placeholder='Search term e.g song name, username, playlist name' 
          style={{ width: '370px', height: '40px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} 
          value={searchTerm}
          onChange={this.handleChange}
        />
        <button 
          onClick={this.handleSearch} 
          style={{ marginLeft: '10px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#24392F', color: 'white', borderRadius: '4px' }}
        >
          Search
        </button>
        <div style={{ color: 'red', marginLeft: '15px' }}>
          {error && <span>{error}</span>} 
        </div>
        
        {/* Display Search Results */}
        <div style={{ marginTop: '20px', color: 'white' }}>
          <h3>Search Results</h3>
          <div>
            <h4>Songs:</h4>
            <ul>
              {results.songs.map(song => (
                <li key={song._id}>{song.title} by {song.artist}</li>
              ))}
            </ul>
            <h4>Users:</h4>
            <ul>
              {results.users.map(user => (
                <li key={user._id}>{user.username}</li>
              ))}
            </ul>
            <h4>Playlists:</h4>
            <ul>
              {results.playlists.map(playlist => (
                <li key={playlist._id}>{playlist.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}