import React from "react";
import { useParams } from "react-router-dom";

import { Home } from "./Home";

const SongListWrapper = () => {
    const { userId } = useParams(); 
    console.log("SongListWrapper userId : ", userId);
    return <Home userId={userId} />; 
  };
  
  export default SongListWrapper;