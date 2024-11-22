import React from "react";
import { Song } from "../components/Song";
import { AddSong } from "../components/AddSong";

export class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [], 
      error: null,  
      noSongs: false,
    };

    this.addSong = this.addSong.bind(this);
    this.fetchSongs = this.fetchSongs.bind(this);
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
  }

  componentDidMount() {
    console.log("Component Mounted");
    const { userId } = this.props;
    console.log("User ID:", userId);
    if (userId) {
      this.fetchSongs();
    } else {
      console.error("userId prop is missing!");
    }
    ;
  }

  async fetchSongs() {
    const userID = this.props.userId;
    try {
      console.log(`UserID from login: ${userID}`);
      const response = await fetch(`/user/songList/${userID}`);
      const result = await response.json();
  
      if (response.ok) {
        if (result.songs.length == 0) {
          // If no songs, create a new song list for the user
          console.log(`Creating a new song list for the user...`);
          const createListResponse = await fetch('/user/createSongList', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userID, userName: this.props.userName, songs: [] }),
          });
          
          if (!createListResponse.ok) {
            const createListError = await createListResponse.json();
            throw new Error(createListError.message);
          }
          
          this.setState({ noSongs: true });
        } else {
          console.log(`The user does not need to create a new song list for the user...`);
          const songDetailsPromises = result.songs.map(async (songID) => {
            const res = await fetch(`/song/${songID}`);
            return res.json();
          });
      
          const songsDetails = await Promise.all(songDetailsPromises);
          this.setState({ library: songsDetails, noSongs: false }); 
        }
      } else if (result.error === "User not found") {
        this.setState({ error: "User not found" });
      } else {
        console.error(result.error);
        this.setState({ error: result.error });
      }
    } catch (error) {
      console.error("Error fetching user song list:", error);
      this.setState({ error: "Error fetching user song list" });
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

    const newSong = {
      songPic: songData.songPic,
      songTitle: songData.songTitle,
      songArtist: songData.songArtist,
      songLink: songData.songLink,
      deleted: false,
      id: songID,
    };

    this.setState(prevState => ({
      library: [...prevState.library, newSong],
      noSongs: false,
    }));

    const userID = this.props.userId; 
    const userResponse = await fetch(`/user/${userID}/addSong`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ songID }),
    });

    if (!userResponse.ok) {
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

  render() {
    const { library, error, noSongs } = this.state;
    return (
      <div style={{ backgroundColor: '#3F6751', marginLeft: '20px' }}>
        {error ? (
          <h3 style={{ color: 'red' }}>{error}</h3> 
        ) : noSongs ? (
          <div>
            <h3>You have no songs in your library yet.</h3>
            <p>Start by adding your favorite songs!</p>
          </div>
        ) : library.length > 0 ? (
          library.map((song, i) => (
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
          <h3>Loading songs...</h3> // Show loading while fetching
        )}

        <br />
        <br />

        <div id="plus" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <button onClick={this.toggleFormVisibility}>
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