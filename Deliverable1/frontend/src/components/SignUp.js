import React from "react";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: null,
      firstName: "",
      lastName: "",
      username: "",
      pronouns: "",
      bio: "",
      showInstagram: false,
      showX: false,
      showTikTok: false,
      instagramHandle: "",
      xHandle: "",
      tiktokHandle: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.social = this.social.bind(this);
  }

  handleFileChange(event) {
    const file = event.target.files[0]; // Get the selected file
    this.setState({ profilePic: file });
  }

  handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  }

  social(event) {
    const { id, value } = event.target;
    
    if (id === "instaYes") {
      this.setState({ showInstagram: true });
    } else if (id === "instaNo") {
      this.setState({ showInstagram: false, instagramHandle: "" }); // Reset handle when option is no
    }
  
    if (id === "xYes") {
      this.setState({ showX: true });
    } else if (id === "xNo") {
      this.setState({ showX: false, xHandle: "" }); // Reset handle when option is no
    }
  
    if (id === "tiktokYes") {
      this.setState({ showTikTok: true });
    } else if (id === "tiktokNo") {
      this.setState({ showTikTok: false, tiktokHandle: "" }); // Reset handle when option is no
    }
  }
  
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  async handleSubmit(event) {
    event.preventDefault();

    // Gather data
    const userData = {

      profilePic: this.state.profilePic,
      fullName: this.state.firstName + this.state.lastName,
      userName: this.state.username,
      pronouns: this.state.pronouns,
      password: this.state.password,
      bio: this.state.bio,
      insta: this.state.showInstagram ? this.state.instagramHandle : "none",
      ex: this.state.showX ? this.state.xHandle : "none",
      tik: this.state.showTikTok? this.state.tiktokHandle : "none"
    };

    // POST request to the server
    try {
      const response = await fetch('/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userData })
      });
      
      if (response.ok) {
        const result = await response.json();
        alert(result.id);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      alert('Error inserting user: ' + error.message);
    }
  }
  render() {
    return (
      <div style={{ backgroundColor: '#3F6751', textAlign: 'center', padding: '25px' }}>
        <img
          style={{ height: '150px', width: '220px', paddingRight: '30px', borderStyle: 'none', textAlign: 'center' }}
          src='./assets/images/loop.png'
          alt="logo"
        />
        <h3 style={{ fontSize: '20px', color: 'white', fontFamily: 'Geneva, Verdana, sans-serif' }}>
          We're happy to have you join loop!
        </h3>
        <h3 style={{ fontSize: '20px', color: 'white', fontFamily: 'Geneva, Verdana, sans-serif' }}>
          But first, help us to fill in the following details:
        </h3>

        <form onSubmit={this.handleSubmit} style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange.bind(this)}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange.bind(this)}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Profile Picture:</label>
            <input 
              type="file"  
              onChange={this.handleFileChange} 
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange.bind(this)}
              placeholder="Pick any unique name you would like to go by!"
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password :</label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange.bind(this)}
              placeholder="Create a secure password for this account"
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>


          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="pros">Pronouns : </label>
            <select
              id="pros"
              name="pronouns"
              value={this.state.pronouns}
              onChange={this.handleInputChange.bind(this)}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            >
              <option value="He/Him">He/Him</option>
              <option value="She/Her">She/Her</option>
              <option value="They/Them">They/Them</option>
              <option value="It/Its">It/Its</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleInputChange}
              
              placeholder="Let us know a bit more about yourself and your music taste"
              style={{ width: '100%', height: '120px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Link your Social Media:</label>

            <div style={{ paddingLeft: '5px' }}>
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                Instagram:
                <img
                  src="./assets/images/insta.jpg"
                  alt="Instagram"
                  style={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px' }}
                />
                &nbsp; &nbsp; &nbsp;
                <input
                  type="radio"
                  id="instaYes"
                  name="instagram"
                  value="Yes"
                  onChange={this.social}
                />
                <label htmlFor="instaYes" style={{ marginRight: '15px' }}>Yes</label>
                <input
                  type="radio"
                  id="instaNo"
                  name="instagram"
                  value="No"
                  onChange={this.social}
                />
                <label htmlFor="instaNo">No</label>
              </label>
              {this.state.showInstagram && (
                <span>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Handle:</label>
                  <input
                    type="text"
                    name="instagramHandle"
                    value={this.state.instagramHandle}
                    onChange={this.handleInputChange.bind(this)}
                    
                    placeholder="e.g @thisisrealmusic99"
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                  />
                </span>
              )}
                <br/>
                <br/>
            </div>
            
            <div style={{ paddingLeft: '5px' }}>
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                X:
                <img
                  src="./assets/images/ex.png"
                  alt="X"
                  style={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px' }}
                />
                &nbsp; &nbsp; &nbsp;
                <input
                  type="radio"
                  id="xYes"
                  name="x"
                  value="Yes"
                  onChange={this.social}
                />
                <label htmlFor="xYes" style={{ marginRight: '15px' }}>Yes</label>
                <input
                  type="radio"
                  id="xNo"
                  name="x"
                  value="No"
                  onChange={this.social}
                />
                <label htmlFor="xNo">No</label>
              </label>
              {this.state.showX && (
                <span>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Handle:</label>
                  <input
                    type="text"
                    name="xHandle"
                    value={this.state.xHandle}
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="e.g @thisisrealmusic99"
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                  />
                </span>
                
              )}
              <br/>
              <br/>
            
            </div>

            <div style={{ paddingLeft: '5px' }}>
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                TikTok :
                <img
                  src="./assets/images/tik.png"
                  alt="TikTok"
                  style={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px' }}
                />
                &nbsp; &nbsp; &nbsp;
                <input
                  type="radio"
                  id="tiktokYes"
                  name="tiktok"
                  value="Yes"
                  onChange={this.social}
                />
                <label htmlFor="tiktokYes" style={{ marginRight: '15px' }}>Yes</label>
                <input
                  type="radio"
                  id="tiktokNo"
                  name="tiktok"
                  value="No"
                  onChange={this.social}
                />
                <label htmlFor="tiktokNo">No</label>
              </label>
              {this.state.showTikTok && (
                <span>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Handle:</label>
                  <input
                    type="text"
                    name="tiktokHandle"
                    value={this.state.tiktokHandle}
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="e.g @thisisrealmusic99"
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                  />
                </span>
              )}

             
            </div>
          </div>
          <br/>
          <br/>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{ fontSize: '18px', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#24392F', cursor: 'pointer' }}
            >
              Join
            </button>
          </div>
        </form>
      </div>
    );
  }
}