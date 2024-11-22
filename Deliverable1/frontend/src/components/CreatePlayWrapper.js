import React from "react";

import { CreatePlay } from "./CreatePlay";

const CreatePlayWrapper = () => {
    
    const currentUser = JSON.parse(sessionStorage.getItem("profile")) || null;

    console.log("Current User: ", currentUser);
    return <CreatePlay currentUser={currentUser}/>; 
  };
  
  export default CreatePlayWrapper;