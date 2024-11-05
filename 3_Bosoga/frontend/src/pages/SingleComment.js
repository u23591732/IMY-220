import React from "react";
export class SingleComment extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }

    render()
    {
        return(
            <div style={{backgroundColor:'#3F6751',textAlign : 'center',padding:'25px'}}>
                <div style={{ backgroundColor: '#3F6751', textAlign: 'center', padding: '25px' }}>
    <br />
    <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', 
            width: '40%',
            margin: '0 auto',
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '10px'
         }}>
            
        <h5 style={{ margin: 0 }}>{this.props.comment}</h5>
        <img style={{ width: '90px', height: '70px', marginLeft: '15px' }} src={this.props.pic} alt="comment" />
        </div>
       </div>

            </div>
        )
    }
} 