import React from "react";


export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      loginError: "", // To show errors like "User not found" or incorrect credentials
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  validateForm() {
    let isValid = true;
    let usernameError = "";
    let passwordError = "";

    if (this.state.username === "") {
      usernameError = "Username is required";
      isValid = false;
    }

    if (this.state.password === "") {
      passwordError = "Password is required";
      isValid = false;
    }

    this.setState({ usernameError, passwordError });
    return isValid;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validateForm();

    if (isValid) {
      try {
        const response = await fetch(`/username/${this.state.username}`, {
          method: 'GET',
        });
        const userData = await response.json();

        if (response.status === 200 && userData.password === this.state.password) {
          alert("Login successful");
          console.log("Login successful");
          // Proceed with logged-in flow, redirect, or store user data
        } else if (response.status === 404) {
          this.setState({ loginError: "User not found" });
        } else {
          this.setState({ loginError: "Incorrect password" });
        }
      } catch (error) {
        this.setState({ loginError: "An error occurred. Please try again." });
      }
    } else {
      console.log("Form validation failed.");
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "#3F6751", textAlign: "center", padding: "25px" }}>
        <img
          style={{ height: "150px", width: "250px", paddingRight: "30px", borderStyle: "none", textAlign: "center" }}
          src="./assets/images/loop.png"
          alt="Logo"
        />
        <h3 style={{ fontSize: "20px", color: "white", fontFamily: "Geneva, Verdana, sans-serif" }}>
          A personalised music experience
        </h3>

        <h3>Login :</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <div style={{ color: "red" }}>{this.state.usernameError}</div>
          </div>
          <br />

          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div style={{ color: "red" }}>{this.state.passwordError}</div>
          </div>
          <br />

          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Login
          </button>
          <div style={{ color: "red" }}>{this.state.loginError}</div> {/* To show login errors */}
        </form>

        <br />
        <label style={{ color: "white" }}>
          Don't have an account?{" "}
          <span style={{ color: "white", textDecoration: "underline", cursor: "pointer" }}>
            Register
          </span>
        </label>
      </div>
    );
  }
}