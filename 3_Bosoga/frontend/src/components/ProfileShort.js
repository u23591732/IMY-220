import React from "react";

export class ProfileShort extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                  
                padding: '10px',
                backgroundColor: '#3F6751', 
                borderRadius: '8px',
                
                marginBottom: '10px', 
            }}>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img  style={{height: '120px',width: '120px',borderRadius: '50%',objectFit: 'cover',marginRight: '15px', }} src={this.props.userPic}/>
                <h2 style={{ color: 'white', margin: 0 }}>{this.props.userName}</h2>
                </label>
                
            </div>
        );
    }
}