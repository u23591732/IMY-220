import React from "react";
import { ShortList } from "./pages/ShortList";
import { ProfileList } from "./pages/ProfileList";
import { Header } from "./components/Header";
import { PlaylistShort} from "./components/PlaylistShort";
import { ProfileShort} from "./components/ProfileShort";
import {SignUp} from "./components/SignUp";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Logout } from "./pages/Logout";
import { SongList } from "./pages/SongList";
import { Home } from "./pages/Home";
import { Search } from "./components/Search";
import { Login } from "./components/Login";
import { Profile } from "./pages/Profile";
import { PlaylistPage} from "./pages/PlaylistPage";
import { EditProfile } from "./components/EditProfile";
import { CreatePlay } from "./components/CreatePlay";
import { EditPlay } from "./components/EditPlay";
import { SingleComment } from "./pages/SingleComment";
import { CreateComment } from "./components/CreateComment";
import { CommentList } from "./pages/CommentList";

export class App extends React.Component{


    constructor(props)
    {
        super(props);
        
    }


    render()
    {
        /* <Profile profilePic = "./assets/images/kendra.jpg" fullName="Joyce Tshabalala" userName="jtshanbalal63"
            pronouns="She/Her" bio="23 year old music journalist with a passion for old school hip-hop and rnb & shit , so send a friend request if you know some good throwbacks!"
            insta = "j@oycehearts90s" ex ="@joyce63hearts90s" tik="None"/>  
        */
   
            /*<EditProfile profilePic = "./assets/images/kendra.jpg" fullName="Joyce Tshabalala" userName="jtshanbalal63"
            pronouns="She/Her" bio="23 year old music journalist with a passion for old school hip-hop and rnb & shit , so send a friend request if you know some good throwbacks!"
            insta = "@joycehearts90s" ex ="@joyce63hearts90s" tik="None"/>
             */

            /* <ShortList/> 
                <ProfileList/>
                  */ 

                /*<Login/>
                  <SignUp/>
                  <Home/>
                  <Search/> 
                  <PlaylistPage playPic = './assets/images/group.jpg' playBio = 'A mix of southern-inspired hiphop bangers and bass boosted club anthems'
    playNo='#004' playUser='Phil Jones' playGenre='Hip-hop' playTags = '#southern #bassboosted #hiphop'/>
                  
    

    [
  {"playPic" : "./assets/images/old.jpg" ,
    "playBio" : "Mzansi's finest oldies",
    "playName":"Golden Oldies ",
    "playUser":"jtshanbalal63",
    "playUserId" : "66f3f25e6e5551813edf1075",
   " playGenre":"Pop",
   " playTags": "#mzansi #throwback #classics",
  
   "songs" : [
  {"songPic" : "./assets/images/brenda.jpg",
"songTitle" : "Weekend Special",
"songArtist" : "Brenda Fassie , The Big Dudes",
"songLink" : "https://open.spotify.com/album/4kMkz62CkGCUVGoPzv0hJP"},
     
 {"songPic" : "./assets/images/not.jpg",
"songTitle" : "Music In The Air",
"songArtist" : "Letta Mbulu , Caiphus Semenya",
"songLink" : "https://open.spotify.com/track/5CQaB5tweelW95KQUn1j2S"}
    
   ]
  
  },
  {"playPic" : "./assets/images/group.jpg" ,
    "playBio" : "A mix of southern-inspired hiphop bangers and bass boosted club anthems",
    "playNo":"#002",
    "playUser":"tomtheguy16",
    "playUserId" : "66f3f25e6e5551813edf1076",
   " playGenre":"Hip-hop",
   " playTags": "#southern #bassboosted #hiphop",
  
   "songs" : [
  {"songPic" : "./assets/images/not.jpg",
"songTitle" : "They Not Like Us",
"songArtist" : "Kendrick Lamar",
"songLink" : "https://open.spotify.com/album/5JjnoGJyOxfSZUZtk2rRwZ"},
     
 {"songPic" : "./assets/images/not.jpg",
"songTitle" : "They Not Like Us",
"songArtist" : "Kendrick Lamar",
"songLink" : "https://open.spotify.com/album/5JjnoGJyOxfSZUZtk2rRwZ"}
    
   ]
  
  },
  {"playPic" : "./assets/images/group.jpg" ,
    "playBio" : "A mix of southern-inspired hiphop bangers and bass boosted club anthems",
    "playNo":"#004",
    "playUser":"Phil Jones",
    "playUserId" : "66f3f25e6e5551813edf1075",
   " playGenre":"Hip-hop",
   " playTags": "#southern #bassboosted #hiphop",
  
   "songs" : [
  {"songPic" : "./assets/images/not.jpg",
"songTitle" : "They Not Like Us",
"songArtist" : "Kendrick Lamar",
"songLink" : "https://open.spotify.com/album/5JjnoGJyOxfSZUZtk2rRwZ"},
     
 {"songPic" : "./assets/images/25.jpg",
"songTitle" : "Culture Vulture",
"songArtist" : "25K",
"songLink" : "https://open.spotify.com/track/02yLi7UBjdkmcdHU4fCWRx"}
    
   ]
  
  },
  {"playPic" : "./assets/images/rock.jpg" ,
    "playBio" : "A short compilation of modern takes on the rock genre",
    "playName":"Modern rock ",
    "playUser":"susanheartsmusic",
    "playUserId" : "66f3f25e6e5551813edf1077",
   " playGenre":"Rock 'n Roll",
   " playTags": "#modern #alt #rock #softrock ",
  
   "songs" : [
  {"songPic" : "./assets/images/psy.jpg",
"songTitle" : "Psycho",
"songArtist" : "Post Malone , Ty Dolla $ign",
"songLink" : "https://open.spotify.com/track/3HvDMcPNrXheHcJuvXyN68"},
     
 {"songPic" : "./assets/images/black.jpg",
"songTitle" : "Black Beatles",
"songArtist" : "Rae Sremmurd",
"songLink" : "https://open.spotify.com/track/6fujklziTHa8uoM5OQSfIo"}
    
   ]
  
  },
  {"playPic" : "./assets/images/summer.jpg" ,
    "playBio" : "The perfect mix to kickstart the summer time ! ",
    "playName":"Summer belongs to us",
    "playUser":"1a1a1and",
    "playUserId" : "66f3f25e6e5551813edf1078",
   " playGenre":"Dance",
   " playTags": "#afrobeats #summer #outdoors #vibes ",
  
   "songs" : [
  {"songPic" : "./assets/images/not.jpg",
"songTitle" : "They Not Like Us",
"songArtist" : "Kendrick Lamar",
"songLink" : "https://open.spotify.com/album/5JjnoGJyOxfSZUZtk2rRwZ"},
     
 {"songPic" : "./assets/images/sup.jpg",
"songTitle" : "Superman",
"songArtist" : "Black Coffee",
"songLink" : "https://open.spotify.com/track/752l1xT5G1OHzg71ZBnTyZ"}
    
   ]
  
  }
  
  
  
]


    */

    
    //for each collection create class(backend folder),with functions that can be exported 
    //each function one of the CRUD operations and will take in data from the inputs in th efrontend and then process in the backend
    //the functions then  return relevant result to the frontend
    //postman to test if the correct inputs result in the correct outputs(input in frontend,connection with database,relevant reslut in backend,passed to the frontend).
                


        
         return(

           <React.Fragment>
             
             <BrowserRouter>
             
            <div>
             <Header/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile profilePic = "./assets/images/kendra.jpg" fullName="Joyce Tshabalala" userName="jtshanbalal63"
            pronouns="She/Her" bio="23 year old music journalist with a passion for old school hip-hop and rnb & shit , so send a friend request if you know some good throwbacks!"
            insta = "j@oycehearts90s" ex ="@joyce63hearts90s" tik="None"/>} />
                
                <Route path="/search" element={<Search/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/playlist/:id" element={<PlaylistPage playPic = './assets/images/group.jpg' playBio = 'A mix of southern-inspired hiphop bangers and bass boosted club anthems'
    playNo='#004' playUser='Phil Jones' playGenre='Hip-hop' playTags = '#southern #bassboosted #hiphop'/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>

               <Login/>
              <SignUp/>
              <SongList/>



            </div>

             </BrowserRouter>
           
           </React.Fragment>

        
         )

         /*function fetchStarWarsCharacter(id) {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Configure it: GET-request for the URL /people/:id from the SWAPI
  xhr.open('GET', `https://swapi.dev/api/people/${id}/`, true);

  // Set up a function to handle the response data
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // 4 means the request is done
      if (xhr.status === 200) { // 200 means the response was successful
        // Parse the JSON response
        const data = JSON.parse(xhr.responseText);
        console.log('Character data:', data);
      } else if (xhr.status === 404) {
        console.error('Character not found.');
      } else {
        console.error('Error fetching data, Status Code:', xhr.status);
      }
    }
  };

  // Send the request to the server
  xhr.send();
}

// Example usage:
fetchStarWarsCharacter(1); */
    }


}