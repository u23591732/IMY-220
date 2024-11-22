import React from "react";
import { useParams } from "react-router-dom";

import { EditProfile } from "./EditProfile";

const EditProfileWrapper = () => {
    const { userId } = useParams(); 
    console.log("EditProfileWrapper userId : ", userId);
    return <EditProfile userId={userId} />; 
  };
  
  export default EditProfileWrapper;