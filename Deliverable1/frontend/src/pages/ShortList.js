import React from "react";
import { PlaylistShort } from "../components/PlaylistShort";



export class ShortList extends React.Component{


    constructor(props)
    {
        super(props);
        this.plays = [{songPic : './assets/images/picnic.jpg',playName : "Songs for The Sunset ",userName : 'user3441389' ,playLink :'https://loopplaylist/user3441389/playlistid#21' },
            {songPic : '/assets/images/old.jpg',playName :'Old School Hip Hop' ,userName : 'Nicolas' ,playLink :'https://loopplaylist/nicolas/playlistid#30' },
            {songPic : '/assets/images/pop.jpg',playName : 'Pop 2024',userName : 'Justin' ,playLink :'https://loopplaylist/justin/playlistid#30' },
            {songPic : '/assets/images/tokyo.jpg',playName : 'Tokyo Drift' ,userName : 'Jordan' ,playLink :'https://loopplaylist/jordan/playlistid#6' },
            {songPic : '/assets/images/count.jpg',playName : 'Country Classics',userName : 'Mason' ,playLink :'https://loopplaylist/mason/playlistid#2' },
            {songPic : '/assets/images/rock.jpg',playName : 'Early 2000\'s rock',userName : 'Samkelo' ,playLink :'https://loopplaylist/samkelo/playlistid#5' },
            {songPic : '/assets/images/3am.jpg',playName : '3am in Hatfield',userName : 'Kyle' ,playLink :'https://loopplaylist/kyle/playlistid#9' },
            {songPic : '/assets/images/afro.jpg',playName : 'Afrobeats Summer Vibes',userName : 'Khanyi' ,playLink :'https://loopplaylist/khanyi/playlistid#17' }
            
        ];

       this.state = {shortPlays : [...this.plays]};
        
        
    }

    

    render()
    {
         return(
            <React.Fragment>
                
            {this.state.shortPlays.map((play,i)=>(
                
                <div key={i} style={{textAlign:'center'}}>
                <div style={{backgroundColor:'#23423C',paddingLeft:'20px',padding:'15px',width:"800px",height:"100px"}}>
                <PlaylistShort playPic={play.songPic} playName={play.playName} playLink={play.playLink} userName={play.userName} />
                </div>
                <br/>
                </div>
                
                 
                
                
               
            ))}
            <br/>
            <br/>
           
            </React.Fragment>

         )
    }

}