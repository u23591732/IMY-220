import React from "react";


export class Song extends React.Component{


    constructor(props)
    {
        super(props);
        
    }


    render()
    {
         return(
            <React.Fragment>
            <span style={{paddingLeft : '30%',paddingBottom: '5px'}}>

            <img style={{float : 'left', height : '100px', width : '100px',paddingRight : '15px'}} src ={this.props.songPic}/>
            <ul style={{listStyleType: 'none'}}>
            <li style={{color : 'black'}}>{this.props.songTitle}</li>
            <li style={{color : 'black'}}>{this.props.songArtist}</li>
            <li style={{color : 'black'}}><a href={this.props.songLink} style={{color : "black"}}>{this.props.songLink}</a></li>
            </ul>
            
           
            </span>

            </React.Fragment>

         )
    }





}