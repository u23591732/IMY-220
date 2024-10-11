import React from "react";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      userName: '',
      pronouns: '',
      bio: '',
      insta: false,
      instaHandle: '',
      ex: false,
      exHandle: '',
      tik: false,
      tikHandle: ''
    };

    this.social = this.social.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // This will handle input changes for text fields
  handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  // This will handle the social media radio buttons
  social() {
    this.setState({
      insta: document.getElementById('instaYes').checked,
      ex: document.getElementById('xYes').checked,
      tik: document.getElementById('tiktokYes').checked,
    });
  }

  // Function to handle form submission
  async handleSubmit(event) {
    event.preventDefault();

    // Gather data
    const userData = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      pronouns: this.state.pronouns,
      bio: this.state.bio,
      insta: this.state.insta ? this.state.instaHandle : null,
      ex: this.state.ex ? this.state.exHandle : null,
      tik: this.state.tik ? this.state.tikHandle : null
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
        alert('User successfully added with ID: ' + result.id);
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
        {/* Form layout */}
        <form onSubmit={this.handleSubmit}>
          <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            {/* Full Name */}
            <div style={{ marginBottom: '20px' }}>
              <label>Full Name:</label>
              <input 
                type="text" 
                name="fullName" 
                value={this.state.fullName}
                onChange={this.handleInputChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
              />
            </div>

            {/* UserName */}
            <div style={{ marginBottom: '20px' }}>
              <label>Username:</label>
              <input 
                type="text" 
                name="userName" 
                value={this.state.userName}
                onChange={this.handleInputChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
              />
            </div>

            {/* Pronouns */}
            <div style={{ marginBottom: '20px' }}>
              <label>Pronouns:</label>
              <select 
                name="pronouns" 
                value={this.state.pronouns}
                onChange={this.handleInputChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              >
                <option value="him">He/Him</option>
                <option value="her">She/Her</option>
                <option value="them">They/Them</option>
                <option value="its">It/Its</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Bio */}
            <div style={{ marginBottom: '20px' }}>
              <label>Bio:</label>
              <textarea 
                name="bio"
                value={this.state.bio}
                onChange={this.handleInputChange}
                style={{ width: '100%', height: '120px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
              />
            </div>

            {/* Social media fields */}
            <div>
              <label>Link your Social Media:</label>

              {/* Instagram */}
              <div>
                <label>Instagram:
                <img 
              src="./assets/images/insta.jpg" 
              alt="Instagram" 
              style={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px' }} 
            /> <br/> &nbsp; &nbsp; &nbsp; 
                </label>
                <input type="radio" id="instaYes" name="insta" value="Yes" onChange={this.social} /> Yes
                <input type="radio" id="instaNo" name="insta" value="No" onChange={this.social} /> No
                {this.state.insta && (
                  <div>
                    <label>Handle:</label>
                    <input 
                      type="text" 
                      name="instaHandle"
                      value={this.state.instaHandle}
                      onChange={this.handleInputChange}
                    />
                  </div>
                )}
              </div>

              {/* X (Twitter) */}
              <div>
                <label>X:
                <img 
              src="./assets/images/ex.png" 
              alt="X" 
              style={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px' }} 
            />
            <br/> &nbsp; &nbsp; &nbsp;
                </label>
                <input type="radio" id="xYes" name="x" value="Yes" onChange={this.social} /> Yes
                <input type="radio" id="xNo" name="x" value="No" onChange={this.social} /> No
                {this.state.ex && (
                  <div>
                    <label>Handle:</label>
                    <input 
                      type="text" 
                      name="exHandle"
                      value={this.state.exHandle}
                      onChange={this.handleInputChange}
                    />
                  </div>
                )}
              </div>

              {/* TikTok */}
              <div>
                <label>TikTok:
                <img 
              src="./assets/images/tik.png" 
              alt="TikTok" 
              style={{ height: '35px', width: '35px', borderRadius: '50%', marginLeft: '10px' }} 
            />
            <br/> &nbsp; &nbsp; &nbsp; 
                </label>
                <input type="radio" id="tiktokYes" name="tiktok" value="Yes" onChange={this.social} /> Yes
                <input type="radio" id="tiktokNo" name="tiktok" value="No" onChange={this.social} /> No
                {this.state.tik && (
                  <div>
                    <label>Handle:</label>
                    <input 
                      type="text" 
                      name="tikHandle"
                      value={this.state.tikHandle}
                      onChange={this.handleInputChange}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Submit button */}
            <button type="submit" 
             style={{ fontSize: '18px', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#24392F', cursor: 'pointer' }}>Join</button>
          </div>
        </form>
      </div>
    );
  }
}