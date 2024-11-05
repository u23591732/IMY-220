import React from "react";
import { Link } from "react-router-dom";


export class Logout extends React.Component {
  constructor(props) {
    super(props);


}

  

  render() {
    return (
      <div style={{ backgroundColor: "#3F6751", textAlign: "center", padding: "25px" }}>
        <br/>
        <h3>You have successfully been logged out </h3>

        <img
          style={{ height: "150px", width: "250px", paddingRight: "30px", borderStyle: "none", textAlign: "center" }}
          src="./assets/images/back2home.png"
          alt="Logo"
        />
        <h3 style={{textAlign:'center',color:'white',textDecoration:'underline'}}>Go Back Home </h3>
        <br/>
      </div>
    );
  }
}