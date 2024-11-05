import React from "react";
export class CreateComment extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }

    render()
    {
        return(
            <div style={{backgroundColor:'#3F6751',textAlign : 'center',padding:'25px'}}>
                <br/>
               
                 <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="tags">Comment : </label>
       <div style={{textAlign:'center',justifyContent:'center'}}>
       <textarea 
           
           id="tags" 
           style={{width: '40%', height: '70px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
           
           placeholder="Share your thoughts on the playlist"
           
           />
           <br/>
           <br/>
           <label >Comment Picture : </label>
           <input type = 'file' style={{textAlign:'right'}}/>
           
       </div>
            </div>
        )
    }
} //iikwikitpiwbboya