import React from "react";




export class SavedList extends React.Component{


    constructor(props)
    {
        super(props);
        this.plays = [
            {playPic : '/assets/images/old.jpg',playName :'Mzansi 90s classics'  },
            {playPic : '/assets/images/tubig.jpg',playName : 'Tupac vs Biggie (hits only)'},
            {playPic : '/assets/images/sol.jpg',playName : 'Good ole soul'  },
            
        ];

       this.state = {shortPlays : [...this.plays]};
        
        
    }

    

    render()
    {
         return(
            <React.Fragment>
                
            {this.state.shortPlays.map((play,i)=>(
                
                <div key={i} style={{textAlign:'center'}}>
                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={play.playPic} style={{float : 'left', height : '80px', width : '80px',paddingRight : '15px'}}></img>
                    <h3 style={{color:'white'}}>{play.playName}</h3>
                 </label>
               
                <br/>
                </div>
                
                 
                
                
               
            ))}
            <br/>
            <br/>
           
            </React.Fragment>

         )
    }

}