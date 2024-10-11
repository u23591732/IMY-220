import React from "react";


export class AddSong extends React.Component{


    constructor(props)
    {
        super(props);
        this.songTitle = React.createRef();
        this.songArtist = React.createRef();
        this.songLink = React.createRef();
        this.songPic = React.createRef();
        this.submit = this.submit.bind(this);
        
    }

    submit(e)
    {
        e.preventDefault();
        let songPic = this.songPic.current.value;
        let songArtist = this.songArtist.current.value;
        let songTitle = this.songTitle.current.value;
        let songLink = this.songLink.current.value;
        this.props.userAddSong(songPic,songArtist,songTitle,songLink);

    }


    render()
    {
         return(
            <React.Fragment>
            <form onSubmit={this.submit}>
  <div style={{ textAlign: 'center' }}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <label style={{ marginRight: '10px' }}>Song Artist(s): </label>
        <input
          type="text"
          placeholder="For multiple artists separate by comma e.g Chris Brown, Drake"
          ref={this.songArtist}
          style={{ width: '500px' }}
        />
      </li>

      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <label style={{ marginRight: '10px' }}>Song Title: </label>
        <input type="text" ref={this.songTitle} style={{ width: '150px' }} />
      </li>

      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <label style={{ marginRight: '10px' }}>Song Link: </label>
        <input type="text" ref={this.songLink} style={{ width: '300px' }} />
      </li>

      <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <label style={{ marginRight: '10px' }}>Cover Image: </label>
        <input type="file" ref={this.songPic} />
      </li>

      <li style={{ textAlign: 'center' }}>
        <button style={{ height: '35px', width: '100px', backgroundColor: '#659455' }}>Add Song</button>
      </li>
    </ul>
  </div>
</form>
</React.Fragment>

         )
    }

}