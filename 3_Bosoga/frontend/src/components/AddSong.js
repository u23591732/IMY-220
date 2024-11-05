import React from "react";

export class AddSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songTitle: "",
            songArtist: "",
            songLink: "",
            songPic: "",
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            this.setState({ songPic: `/assets/images/${file.name}` });
        }
    }

    submit(e) {
        e.preventDefault();

        const { songTitle, songArtist, songLink, songPic } = this.state;
        const songData = {
            songTitle,
            songArtist,
            songLink,
            songPic,
            deleted: false
        };

        
        this.props.userAddSong(songData);

        
        this.setState({
            songTitle: "",
            songArtist: "",
            songLink: "",
            songPic: ""
        });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submit}>
                    <div style={{ textAlign: 'center' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ marginRight: '10px' }}>Song Artist(s): </label>
                                <input
                                    type="text"
                                    name="songArtist"
                                    placeholder="For multiple artists separate by comma e.g Chris Brown, Drake"
                                    value={this.state.songArtist}
                                    onChange={this.handleChange}
                                    style={{ width: '500px' }}
                                />
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ marginRight: '10px' }}>Song Title: </label>
                                <input 
                                    type="text" 
                                    name="songTitle"
                                    value={this.state.songTitle}
                                    onChange={this.handleChange}
                                    style={{ width: '150px' }} 
                                />
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ marginRight: '10px' }}>Song Link: </label>
                                <input 
                                    type="text" 
                                    name="songLink"
                                    value={this.state.songLink}
                                    onChange={this.handleChange}
                                    style={{ width: '300px' }} 
                                />
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <label style={{ marginRight: '10px' }}>Cover Image: </label>
                                <input 
                                    type="file" 
                                    onChange={this.handleFileChange} 
                                />
                            </li>
                            <li style={{ textAlign: 'center' }}>
                                <button style={{ height: '35px', width: '100px', backgroundColor: '#659455' }}>Add Song</button>
                            </li>
                        </ul>
                    </div>
                    <br/>
                </form>
            </React.Fragment>
        );
    }
}