import React from "react";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: null,
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      pronouns: "He/Him",
      bio: "",
      showInstagram: false,
      showX: false,
      showTikTok: false,
      instagramHandle: "",
      xHandle: "",
      tiktokHandle: ""
    };
  }

  handleFileChange = (event) => {
    const file = event.target.files[0]; 
    this.setState({ profilePic: file });
  };

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  };

  handleSocialChange = (platform, isVisible) => {
    this.setState({
      [platform]: isVisible,
      [`${platform}Handle`]: isVisible ? this.state[`${platform}Handle`] : "" 
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { profilePic, firstName, lastName, username, password, pronouns, bio, showInstagram, instagramHandle, showX, xHandle, showTikTok, tiktokHandle } = this.state;

    const userData = {
      profilePic,
      fullName: `${firstName} ${lastName}`,
      userName: username,
      pronouns,
      password,
      bio,
      insta: showInstagram ? instagramHandle : "none",
      ex: showX ? xHandle : "none",
      tik: showTikTok ? tiktokHandle : "none"
    };

    
    try {
      const response = await fetch('/addUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
  };

  render() {
    const { firstName, lastName, username, password, pronouns, bio, showInstagram, showX, showTikTok, instagramHandle, xHandle, tiktokHandle } = this.state;

    return (
      <div style={{ backgroundColor: '#3F6751', textAlign: 'center', padding: '25px' }}>
        <img
          style={{ height: '150px', width: '220px', paddingRight: '30px' }}
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
          {this.renderInput("First Name", "firstName", firstName)}
          {this.renderInput("Last Name", "lastName", lastName)}
          {this.renderFileInput("Profile Picture")}
          {this.renderInput("Username", "username", username, "Pick any unique name you would like to go by!")}
          {this.renderInput("Password", "password", password, "Create a secure password for this account", "password")}
          {this.renderSelect("Pronouns", "pronouns", pronouns, ["He/Him", "She/Her", "They/Them", "It/Its", "Other"])}
          {this.renderTextarea("Bio", "bio", bio, "Let us know a bit more about yourself and your music taste")}
          {this.renderSocialMediaInput("Instagram", "instagram", showInstagram, instagramHandle, "instaYes", "instaNo")}
          {this.renderSocialMediaInput("X", "x", showX, xHandle, "xYes", "xNo")}
          {this.renderSocialMediaInput("TikTok", "tiktok", showTikTok, tiktokHandle, "tiktokYes", "tiktokNo")}
          
          <button type="submit" style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#fff', color: '#3F6751', cursor: 'pointer' }}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }

  renderInput(label, name, value, placeholder = '', type = 'text') {
    return (
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>{label}:</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={this.handleInputChange}
          placeholder={placeholder}
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
        />
      </div>
    );
  }

  renderFileInput(label) {
    return (
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>{label}:</label>
        <input 
          type="file"  
          onChange={this.handleFileChange} 
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} 
        />
      </div>
    );
  }

  renderSelect(label, name, value, options) {
    return (
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>{label}:</label>
        <select
          name={name}
          value={value}
          onChange={this.handleInputChange}
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }

  renderTextarea(label, name, value, placeholder) {
    return (
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>{label}:</label>
        <textarea
          name={name}
          value={value}
          onChange={this.handleInputChange}
          placeholder={placeholder}
          style={{ width: '100%', height: '120px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
        />
      </div>
    );
  }

  renderSocialMediaInput(label, platform, isVisible, handle, yesId, noId) {
    return (
      <div style={{ paddingLeft: '5px' }}>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          {label}:
          <input
            type="radio"
            id={yesId}
            name={platform}
            onChange={() => this.handleSocialChange(`show${label}`, true)}
          />
          <label htmlFor={yesId} style={{ marginRight: '15px' }}>Yes</label>
          <input
            type="radio"
            id={noId}
            name={platform}
            onChange={() => this.handleSocialChange(`show${label}`, false)}
          />
          <label htmlFor={noId}>No</label>
        </label>
        {isVisible && (
          <span>
            <label style={{ display: 'block', marginBottom: '5px' }}>Handle:</label>
            <input
              type="text"
              name={`${platform}Handle`}
              value={handle}
              onChange={this.handleInputChange}
              placeholder={`e.g @yourhandle`}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </span>
        )}
      </div>
    );
  }
}