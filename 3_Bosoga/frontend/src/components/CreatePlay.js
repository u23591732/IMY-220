import React from "react";
import { AddSong } from "./AddSong";

export class CreatePlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playName: "",
            playGenre: "pop",
            playBio: "",
            playTags: "",
            songs: [],
            playPic: "", 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddSong = this.handleAddSong.bind(this); 
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const filename = file.name;
            this.setState({ playPic: `/assets/images/${filename}` });
        }
    }

    handleAddSong(songData) {
        this.setState((prevState) => ({
            songs: [...prevState.songs, songData],
        }));
    }

    async handleSubmit(event) {
        event.preventDefault();

        const { playName, playPic, playGenre, playBio, playTags, songs } = this.state;
        const { currentUser } = this.props;

        const playData = {
            playBio,
            playGenre,
            playName,
            playPic,
            playTags,
            playUser: currentUser.userName,
            playUserId: currentUser._id,
            songs
        };

        try {
            const response = await fetch('/addPlay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(playData),
            });

            if (!response.ok) throw new Error('Failed to create playlist');
            const result = await response.json();
            console.log(result);

            alert('Playlist created successfully!');
            this.setState({
                playName: "",
                playGenre: "pop",
                playBio: "",
                playTags: "",
                songs: [],
                playPic: "",
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create playlist');
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: '#3F6751', textAlign: 'center', padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <img style={{ height: '150px', width: '220px', paddingRight: '30px', borderStyle: 'none' }} src='./assets/images/loop.png' alt="Loop" />
                    <h3 style={{ fontSize: '20px', color: 'white', fontFamily: 'Geneva, Verdana, sans-serif' }}>Create Playlist:</h3>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Playlist Name:</label>
                        <input type="text" name="playName" placeholder="New Playlist #001" style={inputStyle} onChange={this.handleChange} required />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Cover Image:</label>
                        <input type="file" onChange={this.handleFileChange} style={inputStyle} required />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Genre:</label>
                        <select name="playGenre" style={inputStyle} onChange={this.handleChange}>
                            <option value="pop">Pop</option>
                            <option value="rnb">RnB</option>
                            <option value="classical">Classical</option>
                            <option value="dance">Dance</option>
                            <option value="house">House</option>
                            <option value="soul">Soul</option>
                            <option value="electronic">Electronic</option>
                            <option value="rock">Rock</option>
                            <option value="hiphop">Hip-Hop</option>
                            <option value="alternative">Alternative</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Description:</label>
                        <textarea name="playBio" placeholder="Describe your playlist here..." style={textareaStyle} onChange={this.handleChange} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>Tags:</label>
                        <textarea name="playTags" placeholder="What #tags best describe your playlist?" style={textareaStyle} onChange={this.handleChange} />
                    </div>

                    <button type="submit" style={{ height: '35px', width: '100px', backgroundColor: '#24392F', color: 'white' }}>Create Playlist</button>
                </form>
                <br/>
                <AddSong userAddSong={this.handleAddSong} />
                <br/>
                <div>
                    <h3>Added Songs:</h3>
                    <ul>
                        {this.state.songs.map((song, index) => (
                            <li key={index}>{song.songTitle} by {song.songArtist}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
};

const textareaStyle = {
    width: '100%',
    height: '80px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
};