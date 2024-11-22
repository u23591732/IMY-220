import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login"; 

const LoginWrapper = (props) => {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />; 
};

export default LoginWrapper;