import React from "react";


export class PlaylistShort extends React.Component{


    constructor(props)
    {
        super(props);
        
    }


    render()
    {
         return(
            <React.Fragment>
            <span style={{paddingLeft : '60%',paddingBottom: '5px'}}>

            <img style={{float : 'left', height : '100px', width : '100px',paddingRight : '15px'}} src ={this.props.playPic}/>
            <ul style={{listStyleType: 'none'}}>
            <li style={{color : 'white'}}>{this.props.userName} created the playlist "{this.props.playName}"</li>
            <li style={{color : 'white'}}>Link : <a href={this.props.playLink} style={{color : "white"}}>{this.props.playLink}</a></li>
            </ul>
            
            </span>

            </React.Fragment>

         )
    }





}