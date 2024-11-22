import React from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "../pages/Profile";

const ProfileWrapper = (props) => {
  const navigate = useNavigate(); 

  
  return <Profile {...props} navigate={navigate} />;
};

export default ProfileWrapper;