import React from "react";


export class ProfileShort extends React.Component{


    constructor(props)
    {
        super(props);
        
    }


    render()
    {
         return(
            <React.Fragment>
            <span style={{paddingLeft : '60%',paddingBottom: '5px'}}>

            <img style={{float : 'left', height : '80px', width : '80px',paddingRight : '15px',borderRadius:'50%',objectFit: 'cover'}} src ={this.props.userPic}/>
            
            <h4 style={{color : 'white'}}>{this.props.userName}</h4>  
            </span>

            </React.Fragment>

         )
    }





}