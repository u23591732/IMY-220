import React from "react";
import { Song } from "../components/Song";
import { AddSong } from "../components/AddSong";


export class PlaylistPage extends React.Component{


    constructor(props)
    {
        super(props);
        this.songs = [{songPic : './assets/images/not.jpg',songTitle : "They Not Like Us",songArtist : 'Kendrick Lamar' ,songLink :'https://open.spotify.com/album/5JjnoGJyOxfSZUZtk2rRwZ' },{songPic : '/assets/images/tayo.jpg' ,songTitle : "Selema (Popo)",songArtist : "Musa Keys" ,songLink :'https://open.spotify.com/track/2UNdr8gnOQrVkSmLDeC59w' },
            {songPic : '/assets/images/black.jpg',songTitle :'Black Beattles' ,songArtist : 'Rae Sremmurd',songLink : 'https://open.spotify.com/track/6fujklziTHa8uoM5OQSfIo' },{songPic : '/assets/images/kel.jpg',songTitle : 'Soul to Soul',songArtist : 'Kelvin Momo , Babalwa M' ,songLink :'https://open.spotify.com/track/6r5ke34zVTYuCW3uuE153z' },
            {songPic : '/assets/images/slim.jpg',songTitle : 'The Real Slim Shady',songArtist : 'Eminem',songLink :'https://open.spotify.com/track/3yfqSUWxFvZELEM4PmlwIR' },
            {songPic : '/assets/images/psy.jpg',songTitle : 'Psycho',songArtist : 'Post Malone , Ty Dolla $ign ',songLink : 'https://open.spotify.com/track/3HvDMcPNrXheHcJuvXyN68'},
            
        ];

       this.state = {library : [...this.songs]};
        this.addSong = this.addSong.bind(this);
        this.dropShow = this.dropShow.bind(this);
        
    }

    addSong(mySongPic,mySongTitle,mySongArtist,mySongLink)
    {
        console.log("Song details:", mySongPic, mySongTitle, mySongArtist, mySongLink);

        
        this.setState((prevState) => ({
            library: [
                ...prevState.library, 
                {
                    songPic: mySongPic,
                    songTitle: mySongTitle,
                    songArtist: mySongArtist,
                    songLink: mySongLink
                }
            ]
        }));

        let plusEl = document.getElementById('plus');
        plusEl.style.display = 'block';

        let showEl = document.getElementById('show');
        showEl.style.display = 'none';

    }

    dropShow()
    {
        console.log('User wants to add song');
        let plusEl = document.getElementById('plus');
        plusEl.style.display = 'none';

        let showEl = document.getElementById('show');
        showEl.style.display = 'block';



    }


    render()
    {
         return(
            <React.Fragment>
               <div style={{backgroundColor:'#3F6751'}}>
               
  <div style={{ 
    backgroundColor: '#3F6751', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh' 
  }}>
    <div style={{ 
      padding: '50px', 
      backgroundColor: '#24392F', 
      width: '800px', 
      textAlign: 'center' 
    }}>
      <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <h3>Playlist Name : {this.props.playName}</h3>
        <h3>Created By @{this.props.playUser}</h3>
      </label>
      <div style={{ 
        textAlign: 'center', 
        height: '300px',  
        width: '300px',   
        overflow: 'hidden', 
        margin: '0 auto' 
      }}>
        <img src={this.props.playPic} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Profile" />
      </div>
      <h3>{this.props.playBio}</h3>
      <h3>Genre : {this.props.playGenre}</h3>
      <h3>Tags : {this.props.playTags}</h3>
    </div>
  </div>
            <div style={{backgroundColor:'#3F6751'}}>
            {this.state.library.map((song,i)=>(
                
                <React.Fragment key={i}>
                <Song songPic={song.songPic} songTitle={song.songTitle} songLink={song.songLink} songArtist={song.songArtist} />
                 <br/>
                </React.Fragment>
               
            ))}
            </div>
            <br/>
            <br/>
            <div id="plus" style={{textAlign:'center',justifyContent:'center'}}>
                <button onClick={this.dropShow}><img src="/assets/images/add.png"></img></button>
                <br/>
                <h1 style={{textAlign:'center'}}>Add a new song</h1>
            </div>
            <div id="show" style={{textAlign:'center',justifyContent:'center',display:'none'}}>
                <AddSong userAddSong={this.addSong}/></div>
               </div>
            </React.Fragment>

         )
    }

}