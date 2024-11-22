import React from "react";

export class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: "",
      fullName: "",
      userName: "",
      pronouns: "",
      bio: "",
      insta: "",
      ex: "",
      tik: "",
    };
    this.social = this.social.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Fetch the user's current data
    fetch(`/user/${this.props.userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          profilePic: data.profilePic,
          fullName: data.fullName,
          userName: data.userName,
          pronouns: data.pronouns,
          bio: data.bio,
          insta: data.insta,
          ex: data.ex,
          tik: data.tik,
        });
      })
      .catch(error => console.error("Error fetching user data:", error));
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      // Extract the file name
      const fileName = file.name;
      // Prepend the desired path
      const imagePath = `/assets/images/${fileName}`;
      // Set the profilePic state to the constructed path
      this.setState({ profilePic: imagePath });
    }
  }

  social() {
    const socialFields = ["insta", "ex", "tik"];
    socialFields.forEach(field => {
      const displayStyle = document.getElementById(`${field}Yes`).checked ? "block" : "none";
      document.getElementById(`hideLink${field}`).style.display = displayStyle;
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const userData = {
      profilePic: this.state.profilePic, // This will be the constructed path
      fullName: this.state.fullName,
      userName: this.state.userName,
      pronouns: this.state.pronouns,
      bio: this.state.bio,
      insta: this.state.insta,
      ex: this.state.ex,
      tik: this.state.tik,
    };

    fetch(`/users/${this.props.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userData}), // Sending the JSON object directly
    })
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error("Error updating user data:", error));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ backgroundColor: "#3F6751", textAlign: "center", padding: "25px" }}>
        <h3 style={{ fontSize: "20px", color: "white", fontFamily: "Geneva, Verdana, sans-serif" }}>Update your details:</h3>

        <div style={{ textAlign: "center", padding: "15px", borderRadius: "50%" }}>
    <img 
      src={this.state.profilePic} 
      alt="Profile" 
      style={{ 
        display: "block", // Ensures the image is treated as a block element
        margin: "0 auto", // Centers the image horizontally
        maxWidth: "150px", // Increased size for the image
        maxHeight: "150px", // Increased size for the image
        borderRadius: "50%", // Makes the image round
      }} 
    />
  </div>
  <br/>
  <br/>
        <label style={{ display: "block", marginBottom: "5px" }}>Profile photo</label>
        <br/>
        <div style={{ marginBottom: "20px" }}>
          <label>Change profile photo:</label>
          <input type="file" name="profilePic" onChange={this.handleImageChange} />
        </div>

        <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Username:</label>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="pros">Pronouns:</label>
            <select
              id="pros"
              name="pronouns"
              value={this.state.pronouns}
              onChange={this.handleInputChange}
              style={{ width: "100%", padding: "8px" }}
            >
              <option value="him">He/Him</option>
              <option value="her">She/Her</option>
              <option value="them">They/Them</option>
              <option value="its">It/Its</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="bio">Bio: </label>
            <textarea
              id="bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleInputChange}
              style={{ width: "100%", height: "120px", padding: "8px" }}
            />
          </div>

          {/* Social Media Section */}
          <div style={{ marginBottom: "20px" }}>
            <label>Link your Social Media:</label>
            <br />
            <br />
            {/* Instagram */}
            <div style={{ paddingLeft: "5px" }}>
              <label>Instagram:</label>
              <input type="radio" id="instaYes" name="instaRadio" onChange={this.social} /> Yes
              <input type="radio" id="instaNo" name="instaRadio" onChange={this.social} /> No
              <span id="hideLinkinsta" style={{ display: "block" }}>
                <label>Handle:</label>
                <input
                  type="text"
                  name="insta"
                  value={this.state.insta}
                  onChange={this.handleInputChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </span>
            </div>
            {/* X (Twitter) */}
            <div style={{ paddingLeft: "5px" }}>
              <label>X:</label>
              <input type="radio" id="xYes" name="xRadio" onChange={this.social} /> Yes
              <input type="radio" id="xNo" name="xRadio" onChange={this.social} /> No
              <span id="hideLinkex" style={{ display: "block" }}>
                <label>Handle:</label>
                <input
                  type="text"
                  name="ex"
                  value={this.state.ex}
                  onChange={this.handleInputChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </span>
            </div>
            {/* TikTok */}
            <div style={{ paddingLeft: "5px" }}>
              <label>TikTok:</label>
              <input type="radio" id="tiktokYes" name="tiktokRadio" onChange={this.social} /> Yes
              <input type="radio" id="tiktokNo" name="tiktokRadio" onChange={this.social} /> No
              <span id="hideLinktik" style={{ display: "block" }}>
                <label>Handle:</label>
                <input
                  type="text"
                  name="tik"
                  value={this.state.tik}
                  onChange={this.handleInputChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                fontSize: "18px",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "#24392F",
                cursor: "pointer",
              }}
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    );
  }
}