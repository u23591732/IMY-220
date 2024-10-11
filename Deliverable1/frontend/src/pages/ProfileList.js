import React from "react";
import { ProfileShort } from "../components/ProfileShort";



export class ProfileList extends React.Component{


    constructor(props)
    {
        super(props);
        this.people = [{userPic : './assets/images/kendra.jpg',userName : "kendra2real "},
            {userPic : './assets/images/tom.jpg',userName : "tomtheguy16"},
            {userPic : './assets/images/suzie.jpg',userName : "susanheartsmusic"},
            {userPic : './assets/images/lala.jpg',userName : "lalaupgood "},
            {userPic : './assets/images/hector.jpg',userName : "hectordanefield44 "},
            {userPic : './assets/images/chloe.jpg',userName : "wakeupchloe "}
        ];

       this.state = {shortPeople : [...this.people]};
        
        
    }

    

    render()
    {
         return(
            <div style={{backgroundColor:'#3F6751'}}>
                
            {this.state.shortPeople.map((user,i)=>(
                
                <div key={i} >
                <div style={{padding:'15px',width:"400px",height:"50px"}}>
                <ProfileShort userPic={user.userPic} userName={user.userName} />
                </div>
                <br/>
                </div>
                
                 
                
                
               
            ))}
            <br/>
            <br/>
           
            </div>

         )
    }

}