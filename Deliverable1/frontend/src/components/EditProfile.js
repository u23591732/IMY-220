import React from "react";
export class EditProfile extends React.Component{
    constructor(props)
    {
        super(props);
        this.social = this.social.bind(this.social);
    }

    social()
    {
        var insta = document.getElementById('hideLink1');
        var ex = document.getElementById('hideLink2');
        var tiktok = document.getElementById('hideLink3');

        var inChe = document.getElementById('instaYes');
        var exChe = document.getElementById('xYes');
        var tikChe = document.getElementById('tiktokYes');

        if(inChe.checked == true)
        {
            insta.style.display = 'block';
        }

       if(inChe.checked == false)
        {
            insta.style.display = 'none';
        }

        if(exChe.checked == true)
            {
                ex.style.display = 'block';
            }
         if(exChe.checked == false)
            {
                ex.style.display = 'none';
            }

         if(tikChe.checked == true)
                {
                    tiktok.style.display = 'block';
                }
           if(tikChe.checked == false)
                {
                    tiktok.style.display = 'none';
                }

        

    }

    render()
    {
        return (
            <div style={{backgroundColor:'#3F6751',textAlign : 'center',padding:'25px'}}>
            <h3 style={{fontSize : '20px',color : 'white',fontFamily:'Geneva, Verdana, sans-serif'}}>Update your details : </h3>
            
            <div></div> 
            <div style={{textAlign:'center',padding:'15px',borderRadius:'50%'} }><img src={this.props.profilePic}></img></div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Profile photo</label>
            <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Change profile photo :</label>
        <input 
          type="file" 
          
        />
      </div>
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
        <input 
          type="text" 
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
          defaultValue={this.props.fullName}
        />
      </div>

     

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
        <input 
          type="text" 
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
          placeholder="Pick any unique name you would like to go by!" 
          defaultValue={this.props.userName}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="pros">Pronouns:</label>
        <select 
          id="pros" 
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
        >
          <option value="him">He/Him</option>
          <option value="her">She/Her</option>
          <option value="them">They/Them</option>
          <option value="its">It/Its</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="bio">Bio:</label>
        <textarea 
          id="bio" 
          style={{ width: '100%', height: '120px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
          placeholder="Let us know a bit more about yourself and your music taste"
          defaultValue={this.props.bio}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Link your Social Media:</label>
            <br/>
            <br/>
        <div style={{ paddingLeft: '5px' }}>
          <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            Instagram:
            <img 
              src="./assets/images/insta.jpg" 
              alt="Instagram" 
              style={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px' }} 
            />
            <br/> &nbsp; &nbsp; &nbsp; 
            <input type="radio" id="instaYes" name="insta" value="Yes" style={{ marginRight: '5px' }} onChange={this.social}/>
            <label htmlFor="instaYes" style={{ marginRight: '15px' }}>Yes</label>
            <input type="radio" id="instaNo" name="insta" value="No" style={{ marginRight: '5px' }} onChange={this.social} />
            <label htmlFor="instaNo">No</label>
            
          </label>
          <br/>
            <span id="hideLink1" style={{ display: 'block' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Handle:</label>
              <input 
                type="text" 
                
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
                defaultValue={this.props.insta}
              />
            </span>
            <br/>

          <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            X:
            <img 
              src="./assets/images/ex.png" 
              alt="X" 
              style={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px' }} 
            />
            <br/> &nbsp; &nbsp; &nbsp;
            <input type="radio" id="xYes" name="x" value="Yes" style={{ marginRight: '5px' }} onChange={this.social} />
            <label htmlFor="xYes" style={{ marginRight: '15px' }}>Yes</label>
            <input type="radio" id="xNo" name="x" value="No" style={{ marginRight: '5px' }} onChange={this.social} />
            <label htmlFor="xNo">No</label>
            <br/>
            
          </label>
          <span id="hideLink2" style={{ display: 'block' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Handle:</label>
              <input 
                type="text" 
                
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
                defaultValue={this.props.ex}
              />
            </span>
           
            <br/>
          <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            TikTok:
            <img 
              src="./assets/images/tik.png" 
              alt="TikTok" 
              style={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px' }} 
            />
            <br/> &nbsp; &nbsp; &nbsp; 
            <input type="radio" id="tiktokYes" name="tiktok" value="Yes" style={{ marginRight: '5px' }} onChange={this.social}/>
            <label htmlFor="tiktokYes" style={{ marginRight: '15px' }}>Yes</label>
            <input type="radio" id="tiktokNo" name="tiktok" value="No" style={{ marginRight: '5px' }} onChange={this.social}/>
            <label htmlFor="tiktokNo">No</label>
            <br/>
          </label>
          <span id="hideLink3" style={{ display: 'yes' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Handle:</label>
              <input 
                type="text" 
                
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
                defaultValue={this.props.tik}
              />
            </span>
            <br/>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button 
          type="submit" 
         style={{ fontSize: '18px', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#24392F', cursor: 'pointer' }}
        >
          Update Profile
        </button>
      </div>
    </div>


    </div>

            
        )
    }
}