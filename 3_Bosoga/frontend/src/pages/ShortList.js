import React from "react";
import { PlaylistShort } from "../components/PlaylistShort";



export class ShortList extends React.Component{


    constructor(props)
    {
        super(props);
        

       this.state = {shortPlays : []};
       this.fetchPlays = this.fetchPlays.bind(this);
        
    }

    componentDidMount() {
        let { userId } = this.props;
        
        
        console.log("User ID:", userId);
        this.fetchPlays();
      }
    
      async fetchPlays() {
        
        
        const userID  = this.props.userId;
        try {
             console.log(`UserID from ShortList fetch : ${userID}` );
            const response = await fetch(`/userPlaylistUserID/${userID}`);
            const result = await response.json();

            console.log(result);
            if (response.ok) {
                if (result[0].plays.length === 0) {
                    
                    this.setState({ noSongs: true });
                } else {
                  const playDetailsPromises = result[0].plays.map(async (playID) => {
                    const res = await fetch(`/playlist/${playID.id}/${playID.saved}`);
                    return res.json(); 
                });
            
                const playDetails = await Promise.all(playDetailsPromises);
                    this.setState({ shortPlays : playDetails, noSongs: false }); 
                }
                console.log(`after fetch attempt to shortlist ` );
            } else if (result.error === "User not found") {
                this.setState({ error: "User not found" });
                console.log(`after fetch attempt to shortlist ` );
            } else {
                console.error(result.error);
                this.setState({ error: result.error });
            }
        } catch (error) {
            
            console.error("Error fetching user playlist list:", this.state.error,error);
            this.setState({ error: "Error fetching playlist list" });
        }
    }
    

    render()
    {
         return(
            <React.Fragment>
                
            {this.state.shortPlays.map((play,i)=>(
                
                <div key={i} style={{textAlign:'center',justifyContent:'center'}}>
                <div style={{backgroundColor:'#23423C',paddingLeft:'20px',padding:'15px',width:"800px",height:"130px",textAlign:'center'}}>
                    
                <PlaylistShort playPic={play.playPic} playName={play.playName}  userName={play.playUser} saved={play.saved}/>
                </div>
                <br/>
                <div>
                <br/>
                <br/>
                
                </div>
                
                </div>
                
                 
                
                
               
            ))}
            <br/>
            <br/>
           
            </React.Fragment>

         )
    }

}