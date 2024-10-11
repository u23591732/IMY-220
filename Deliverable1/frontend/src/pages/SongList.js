import React from "react";
import { Song } from "../components/Song";
import { AddSong } from "../components/AddSong";

export class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [], 
    };

    this.addSong = this.addSong.bind(this);
    this.fetchSongs = this.fetchSongs.bind(this);
    this.dropShow = this.dropShow.bind(this);
  }

  componentDidMount() {
    
    this.fetchSongs();
  }

  async fetchSongs() {
    const userID = '66f3f25e6e5551813edf1075'; 
    try {
        const response = await fetch(`/user/songList/${userID}`);
        const result = await response.json();
        if (response.ok) {
           
            const songDetailsPromises = result.songs.map(songID => 
                fetch(`/song/${songID}`).then(res => res.json())
            );

           
            const songsDetails = await Promise.all(songDetailsPromises);
            this.setState({ library: songsDetails }); 
        } else {
            console.error(result.error);
        }
    } catch (error) {
        console.error("Error fetching song list:", error);
    }
}

async addSong(songData) {
    try {
        
        const songResponse = await fetch('/addSong', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ songData }),
        });

        if (!songResponse.ok) {
            throw new Error('Failed to add song to the database');
        }

        const songResult = await songResponse.json();
        const songID = songResult.id; 

       
        const userID = '66f3f25e6e5551813edf1075'; 
        const userResponse = await fetch(`/user/${userID}/addSong`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ songID }), 
        });

        if (userResponse.ok) {
            const userResult = await userResponse.json();
            console.log(userResult); 
            this.fetchSongs(); 
        } else {
            throw new Error('Failed to add song to user song list');
        }
    } catch (error) {
        console.error("Error adding song:", error);
    }
}

  toggleFormVisibility() {
    const plusEl = document.getElementById('plus');
    const showEl = document.getElementById('show');
    plusEl.style.display = plusEl.style.display === 'none' ? 'block' : 'none';
    showEl.style.display = showEl.style.display === 'none' ? 'block' : 'none';
  }

  dropShow() {
    this.toggleFormVisibility();
  }

  render() {
    return (
      <div style={{ backgroundColor: '#3F6751', marginLeft: '20px' }}>
       
        {this.state.library.length > 0 ? (
          this.state.library.map((song, i) => (
            <React.Fragment key={i}>
              <Song
                songPic={song.songPic}
                songTitle={song.songTitle}
                songArtist={song.songArtist}
                songLink={song.songLink}
              />
              <br />
            </React.Fragment>
          ))
        ) : (
          <h3>No songs in your library yet.</h3>
        )}

        <br />
        <br />
       
        <div id="plus" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <button onClick={this.dropShow}>
            <img src="/assets/images/add.png" alt="Add Song" />
          </button>
          <br />
          <h1 style={{ textAlign: 'center' }}>Add a new song</h1>
        </div>

        
        <div id="show" style={{ textAlign: 'center', justifyContent: 'center', display: 'none' }}>
          <AddSong userAddSong={this.addSong} />
        </div>
      </div>
    );
  }
}
