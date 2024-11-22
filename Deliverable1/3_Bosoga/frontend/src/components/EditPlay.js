import React from "react"

export class EditPlay extends React.Component{
    constructor(props)
    {
        super(props);

    }

    render()
    {
        return(
            <div style={{backgroundColor:'#3F6751',textAlign : 'center',padding:'25px'}}>

            <img style={{height:'150px',width : '220px',paddingRight:'30px',borderStyle:'none',textAlign : 'center'}} src='./assets/images/loop.png'></img>
              <h3 style={{fontSize : '20px',color : 'white',fontFamily:'Geneva, Verdana, sans-serif'}}>Edit your Playlist : </h3>
             
              
              <div></div> 
              
              <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Playlist Name:</label>
          <input 
            type="text" 
            defaultValue={this.props.playName}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
          />
        </div>
  
        <div style={{ marginBottom: '20px' }}>
            <img src={this.props.playPic}></img>
            <br/>
            <br/>
          <label style={{ display: 'block', marginBottom: '5px' }}>Cover Image : </label>
          <input 
            type="file" 
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
          />
        </div>
  
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="pros">Genre : </label>
          <select 
            id="pros" 
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          >
            <option value="pop">Pop</option>
            <option value="rnb">RnB</option>
            <option value="classical">Classical</option>
            <option value="dance">Dance</option>
            <option value="house">House</option>
            <option value="soul">Soul</option>
            <option value="electronic">Electronic</option>
            <option value="rock" selected>Rock</option>
            <option value="hiphop">Hip-Hop</option>
            <option value="alternative">Alternative</option>
          </select>
        </div>
  
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="tags">Tags : </label>
          <textarea 
            id="tags" 
            style={{ width: '100%', height: '120px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
            defaultValue={this.props.playTags}
          />
        </div>
  
       
  
        <div style={{ textAlign: 'center' }}>
          <button 
            type="submit" 
           style={{ fontSize: '18px', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#24392F', cursor: 'pointer' }}>
            Create Playlist
          </button>
        </div>
      </div>
  
      </div>
        )
    }
}