import React from "react";
import { ShortList } from "./pages/ShortList";
import { ProfileList } from "./pages/ProfileList";
import { Header } from "./components/Header";
import { PlaylistShort} from "./components/PlaylistShort";
import { ProfileShort} from "./components/ProfileShort";
import {SignUp} from "./components/SignUp";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Logout } from "./pages/Logout";
import { SplashPage } from "./pages/SplashPage";
import { Home } from "./pages/Home";
import { Search } from "./components/Search";
import SongListWrapper from './pages/SongWrapper';
import CreatePlayWrapper from "./components/CreatePlayWrapper";
import { Profile } from "./pages/Profile";
import { PlaylistPage} from "./pages/PlaylistPage";
import { EditProfile } from "./components/EditProfile";
import { CreatePlay } from "./components/CreatePlay";
import { EditPlay } from "./components/EditPlay";
import { SingleComment } from "./pages/SingleComment";
import { CreateComment } from "./components/CreateComment";
import { CommentList } from "./pages/CommentList";
import LoginWrapper from "./components/LoginWrapper";
import ProfileWrapper from "./components/ProfileWrapper";
import EditProfileWrapper from "./components/EditProfileWrapper";


export class App extends React.Component{


    constructor(props)
    {
        super(props);
        this.state = {
          userData: null, 
        };
    
        this.setUserData = this.setUserData.bind(this);
        
    }
    setUserData(data) {
      this.setState({ userData: data });
    }

    render()
    {
      const { userData } = this.state;
        


        
         return(

           <React.Fragment>
             
             <BrowserRouter>
             
            <div>
              
             <Header/>
              <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/home/:userId" element={<SongListWrapper/>} />
                <Route path="/profile" element={<ProfileWrapper/>} />
                <Route path="/editprofile/:userId" element={<EditProfileWrapper/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/songlist/:userId" element={<SongListWrapper/>} />
                <Route path="/create-play" element={<CreatePlayWrapper/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/playlist/:id" element={<PlaylistPage playPic = './assets/images/group.jpg' playBio = 'A mix of southern-inspired hiphop bangers and bass boosted club anthems'
    playNo='#004' playUser='Phil Jones' playGenre='Hip-hop' playTags = '#southern #bassboosted #hiphop'/>} />
                <Route path="/login" element={<LoginWrapper />} />
                
                <Route path="/signup" element={<SignUp />} />
              </Routes>

               
              
              



            </div>

             </BrowserRouter>
           
           </React.Fragment>

        
         )

         
    }


}