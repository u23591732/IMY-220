import React from "react";
import { Link } from "react-router-dom"; 

export class SavedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shortPlays: [] 
        };

        this.fetchUserPlaylists = this.fetchUserPlaylists.bind(this);
    }

    componentDidMount() {
        this.fetchUserPlaylists();
    }

    async fetchUserPlaylists() {
        try {
            
            const response = await fetch(`/userPlaylistUserID/${this.props.userID}`);
            if (response.ok) {
                const userPlaylist = await response.json();
                console.log("User playlist data fetched:", userPlaylist);

                
                if (!userPlaylist) {
                    console.error("Error: Expected an array in userPlaylist.plays but got:", userPlaylist[0].plays);
                    return;
                }

                
                const playlistDetails = await Promise.all(
                    userPlaylist[0].plays.map(async (play) => {
                        if (!play || !play.name) {
                            console.warn("Skipping invalid play object:", play);
                            return null;
                        }

                        try {
                            const trimmedPlayName = play.name.trim();
                            const encodedPlayName = encodeURIComponent(trimmedPlayName);

                            console.log(`Fetching details for playlist: ${trimmedPlayName} (encoded as ${encodedPlayName})`);

                            const detailResponse = await fetch(`/playlistName/${encodedPlayName}`);
                            if (detailResponse.ok) {
                                const playlistData = await detailResponse.json();
                                console.log(`Successfully retrieved details for playlist "${trimmedPlayName}":`, playlistData);
                                return playlistData;
                            } else {
                                console.warn(`Failed to fetch details for "${trimmedPlayName}". Status: ${detailResponse.status} ${detailResponse.statusText}`);
                                return null;
                            }
                        } catch (error) {
                            console.error(`Error fetching details for playlist "${play.name}":`, error);
                            return null;
                        }
                    })
                );

                
                this.setState({
                    shortPlays: playlistDetails.filter((playlist) => playlist !== null)
                });
            } else {
                console.error('Failed to fetch user playlists:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user playlists:', error);
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.shortPlays.map((play, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <img
                                src={play.playPic}
                                style={{ height: '120px', width: '120px', borderRadius: '50%', objectFit: 'cover', marginRight: '15px' }}
                                alt="Playlist"
                            />
                            <h1 style={{ color: 'white' }}>{play.playName}</h1>
                        </label>
                        <br />
                    </div>
                ))}
                <br />
                <br />

                
                <div style={{ textAlign: 'center' }}>
                    <Link to="/create-play" style={{ textDecoration: 'none' }}>
                    <button style={{
                        fontSize: '18px',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        backgroundColor: '#24392F',
                        cursor: 'pointer',
                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                        transition: 'background-color 0.3s'
                    }}
                    
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1e2d26'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#24392F'}
                    >Create Playlist</button>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}