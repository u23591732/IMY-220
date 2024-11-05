import React from "react";


export class PlaylistShort extends React.Component{


    constructor(props)
    {
        super(props);
        this.handleSaveToggle = this.handleSaveToggle.bind(this);
        this.state = {
            saved: props.saved, 
          };
        
        
    }


    handleSaveToggle = async () => {
        const { playName } = this.props;
    
        
        const encodedPlayName = encodeURIComponent(playName);
        encodedPlayName.trim();
        console.log(`${encodedPlayName}`);
        
        const response = await fetch(`/userPlaylistName/${encodedPlayName}`);
        const myData = await response.json();
        console.log(`Format of the id for the endpoint :${myData.id.trim()}`);
        
        if (myData) {
           
            const newSavedStatus = !this.state.saved;
    
           
            const updatedPlayData = {
                ...myData,
                saved: newSavedStatus, 
            };
    
            
            const updateResponse = await fetch(`/userPlaylists/${myData.id.trim()}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ playData: updatedPlayData}),
            });
    
            if (updateResponse.ok) {
                
                this.setState({ saved: newSavedStatus });

            } else {
                
                const errorMessage = await updateResponse.text(); 
                console.error(`Failed to update playlist: ${updateResponse.status} - ${errorMessage}`);
            }
        } else {
            console.error("Playlist not found");
        }
    };
    render()
    {
        const buttonText = this.state.saved ? 'Unsave' : 'Save';
         return(
            <React.Fragment>
            <span style={{paddingLeft : '60%',paddingBottom: '5px'}}>

            <img style={{float : 'left', height : '120px', width : '150px',paddingRight : '15px',padding:'15px'}} src ={this.props.playPic}/>
            <ul style={{listStyleType: 'none'}}>
            <li style={{color : 'white'}}>{this.props.userName} created the playlist "{this.props.playName}"</li>
            <li>

            <button
            onClick={this.handleSaveToggle}
            style={{
              backgroundColor: this.state.saved ? '#1c2b24' : 'white',
              color: this.state.saved ? 'white' : '#1c2b24',
              padding: '10px 15px',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              fontSize: '16px', 
              marginTop: '10px', 
            }}
          >
            {buttonText}
          </button>

            </li>

            
            </ul>
            
            </span>

            </React.Fragment>

         )
    }





}