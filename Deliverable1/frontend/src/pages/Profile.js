import React from 'react'
import { ProfileList } from './ProfileList';
import { SavedList } from '../components/SavedList';


export class Profile extends React.Component{
    constructor(props)
    {
        super(props);


    }

    render()
    {
        
        return(
            <div style={{backgroundColor:'#3F6751'}}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
    <div style={{ 
      textAlign: 'center', 
      padding: '15px', 
      height: '100px',  
      width: '100px',  
      borderRadius: '50%', 
      overflow: 'hidden', 
      marginRight: '20px' 
    }}>
      <img src={this.props.profilePic} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Profile" />
    </div>
    
    <button style={{ 
      fontSize: '18px', 
      color: 'white', 
      padding: '10px 20px', 
      border: 'none', 
      borderRadius: '4px', 
      backgroundColor: '#24392F', 
      cursor: 'pointer'
    }}>
      Edit Profile
    </button>
  </label>
                
                
                <div style={{ display: 'flex',backgroundColor:'#3F6751',alignItems: 'center',paddingTop:'15px',justifyContent: 'center'}}>
                
                <div style={{textAlign:'center',backgroundColor:'#24392F',alignItems: 'center',width:'650px'}}>
                    <h3>{this.props.fullName}</h3>
                    <br/>
                    <h3>@{this.props.userName}</h3>
                    <br/>
                    <h3>Pronouns : {this.props.pronouns}</h3>
                    <h3>{this.props.bio}</h3>
                    <br/>
                    <h3>Instagram : {this.props.insta}</h3>
                    <br/>
                    <h3>X : {this.props.ex}</h3>
                    <br/>
                    <h3>TikTok : {this.props.tik}</h3>
                    <br/>
                    <br/>

                </div>
                
            </div>
            <hr style={{border: 'none', height:' 1px', backgroundColor: "#24392F"}}></hr>
            <div style={{ 
  display: 'flex', 
  width: '100%' ,
  backgroundColor:'#3F6751'
}}>

      <div style={{ flex: '1',padding: '20px',boxSizing: 'border-box'}}>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <h2 style={{color:'white'}}>Saved Playlists</h2>
      <img style={{height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px'} } src='./assets/images/down.png'></img>
       </label>
       <SavedList/>
      </div>

         <div style={{ flex: '1',padding: '20px',boxSizing: 'border-box'}}>
         <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
         <h2 style={{color:'white'}}>Friends</h2>
         <img style={{height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px'} } src='./assets/images/fri.jpg'></img>
         </label>
         <ProfileList/>
        </div>
       </div>
     </div>
        )
    }
}

