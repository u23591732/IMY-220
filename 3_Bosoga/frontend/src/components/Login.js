import React from "react";
import {Link} from "react-router-dom";
import { SignUp } from "./SignUp";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      loginError: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
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
       
        console.log(`UserID extracted from login: ${userData._id}`);

        if (response.status === 200 && userData.password === this.state.password) {
          alert("Login successful");
          console.log("Login successful");
        
          
       
          sessionStorage.setItem("profile", JSON.stringify(userData));
          window.dispatchEvent(new Event("profileUpdated"));
          

          
          console.log("Login the user ...");
          this.props.navigate(`/songlist/${userData._id}`);
        } else if (response.status === 404) {
          this.setState({ loginError: "User not found" });
        } else {
          this.setState({ loginError: "Incorrect password" });
        }
      } catch (error) {
        this.setState({ loginError: "An error occurred with the log in . Please try again. \n" + error  });
      }
    } else {
      console.log("Form validation failed.");
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "#3F6751", textAlign: "center", padding: "25px" }}>
        
        <h3 style={{ fontSize: "20px", color: "white", fontFamily: "Geneva, Verdana, sans-serif" }}>
          A personalised music experience
        </h3>
      <br/>
      <br/>
       
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

          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer",backgroundColor:'#24392F',color:'white' }}>
            Login
          </button>
          <div style={{ color: "red" }}>{this.state.loginError}</div>
        </form>

        <br />
        <label style={{ color: "white" }}>
          Don't have an account?{" "}
          <Link to = "/signup">
          <span style={{ color: "white", textDecoration: "underline", cursor: "pointer" }}>
            Register
          </span>
          </Link>
          
        </label>
      </div>
    );
  }
}
export default Login;