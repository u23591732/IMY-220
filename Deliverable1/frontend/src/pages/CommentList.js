import React from "react";
import { SingleComment } from "./SingleComment";
export class CommentList extends React.Component{
    constructor(props)
    {
        super(props);
        this.comments = [{comment : 'this is ittt!!!', pic : "./assets/images/scream.jpg"},
            {comment : 'at this point amazeBALLS is all I can say', pic : "./assets/images/happy.jpg"},
            {comment : 'now this right here is what we call quality music', pic : "./assets/images/cooked.jpg"},
            {comment : 'well i will be damned , what a splendid playlist!', pic : "./assets/images/decent.jpg"},

        ];

       this.state = {shortComments : [...this.comments]};

       [
        {"playlistId":"66f400616e5551813edf1085","comment" : "this is ittt!!!", pic : "./assets/images/scream.jpg"},
        {"playlistId":"66f400616e5551813edf1086","comment" : "at this point amazeBALLS is all I can say", "pic" : "./assets/images/happy.jpg"},
        {"playlistId":"66f400616e5551813edf1086","comment" : "now this right here is what we call quality music", "pic" : "./assets/images/cooked.jpg"},
        {"playlistId":"66f400616e5551813edf1087","comment" : "well i will be damned , what a splendid playlist!", "pic" : "./assets/images/decent.jpg"},
      
              ]

              
        
        
    }

    

    render()
    {
         return(
            <div style={{backgroundColor:'#3F6751'}}>
                
            {this.state.shortComments.map((comm,i)=>(
                
                <div key={i} >
               
                <SingleComment comment={comm.comment} pic={comm.pic} />
                
                </div>
                
                 
                
                
               
            ))}
            <br/>
            <br/>
           
            </div>

         )
    }


}