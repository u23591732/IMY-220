

var express = require("express");
var app = express();
app.use(express["static"]("frontend/public"));

const {MongoClient} = require("mongodb");
const uri ="mongodb+srv://IMYuser:Eduplex2023@cluster0.1zrlw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
import "regenerator-runtime/runtime";
const Users = require('../Users');
const UserPlaylists = require('../UserPlaylists');
const Songs = require('../Songs');
const Playlists = require('../Playlists');
const Comments = require('../Comments');
const SongList = require('../SongLists');
const Images = require('../Images');


app.listen(1337,'0.0.0.0', async function () {
  await connectToDatabase();
  console.log("Listening on localhost:1337");
});

let playlists; 
let users;
let comments;
let songs;
let songlists;
let userplaylists;
let images;



app.use(express.json());

// Connect to MongoDB and initialize the Players class
async function connectToDatabase() {
  try {
    await client.connect();
    const db = client.db('LoopDB'); 
    users = new Users(db);
    comments = new Comments(db);
    playlists = new Playlists(db);
    songs = new Songs(db);
    songlists = new SongList(db);
    userplaylists = new UserPlaylists(db);
    images = new Images(db);

    console.log('Access to Users collection');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// *******************User routes************************************
app.post('/addUser', async (req, res) => {
  try {
    const userId = await users.insertUser(req.body.userData); 
    res.status(201).send({ message: 'User successfully inserted', id: userId });
    console.log('User successfully inserted with ID: ' + userId);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get a user by ID
app.get('/user/:id', async (req, res) => {
  try {
    const user = await users.findUserById(req.params.id); 
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//Route to tretreive a user's friends
app.get('/userFriends/:id', async (req, res) => {
  try {
    const user = await users.findUserFriends(req.params.id); 
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});



// Route to get a user by userName
app.get('/username/:name', async (req, res) => {
  try {
    const user = await users.findUserByName(req.params.name); 
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to update a user's details
app.put('/users/:id', async (req, res) => {
  try {
    const updated = await users.updateUser(req.params.id, req.body.userData); 
    if (updated) {
      res.status(200).send({ message: 'User successfully details updated' });
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to delete a user
app.delete('/users/:id', async (req, res) => {
  try {
    const deleted = await users.deleteUser(req.params.id); 
    if (deleted) {
      res.status(200).send({ message: 'User successfully deleted' });
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});






//*******************Song routes************************************
// Route to insert a new song
app.post('/addSong', async (req, res) => {
  console.log("Received song data:", req.body.songData); 
  try {
    const songId = await songs.insertSong(req.body.songData); 
    res.status(201).send({ message: 'Song successfully inserted', id: songId });
    console.log('Song successfully inserted with ID: ' + songId);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get a song by ID
app.get('/song/:id', async (req, res) => {
  try {
    const song = await songs.findSongById(req.params.id); 
    if (song) {
      res.status(200).send(song);
    } else {
      res.status(404).send({ error: 'Song not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get a song by title
app.get('/songTitle/:title', async (req, res) => {
  try {
    const song = await songs.findSongByTitle(req.params.title); 
    if (song) {
      res.status(200).send(song);
    } else {
      res.status(404).send({ error: 'Song not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to get a song by spotify link
app.post('/songLink', async (req, res) => {
  try {
    const song = await songs.findSongByLink(req.body.link);
    if (song) {
      res.status(200).send(song);
    } else {
      res.status(404).send({ error: 'Song not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/* 66f3f25e6e5551813edf1075  jtshanbalal63 
Songs 
    66f3e0756e5551813edf1067 
    66f3e0756e5551813edf1068
    66f3e0756e5551813edf106b
   66f3f25e6e5551813edf1076  tomtheguy16
   66f3f25e6e5551813edf1077   susanheartsmusic
   66f3f25e6e5551813edf1078    1a1a1and
   66f3e0756e5551813edf1069


  66f3e0756e5551813edf106e
   66f3e0756e5551813edf106d



*/

// Route to delete a song
app.delete('/songs/:id', async (req, res) => {
  try {
    const deleted = await songs.deleteSong(req.params.id); 
    if (deleted) {
      res.status(200).send({ message: 'Song successfully deleted' });
    } else {
      res.status(404).send({ error: 'Song not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//*******************Playlist routes************************************


// Route to insert a new playlist
app.post('/addPlay', async (req, res) => {
  try {
    // Step 1: Create the new playlist in the Playlists collection
    const { playBio, playGenre, playName, playPic, playTags, playUser, playUserId, songs } = req.body;
    const playData = { playBio, playGenre, playName, playPic, playTags, playUser, playUserId, songs };
    const playId = await playlists.insertPlay(playData); 
    console.log('Playlist successfully inserted with ID:', playId);

    // Step 2: Fetch the user's friends from the Users collection
    const user = await users.findUserById(playUserId);
    const friendIds = user?.friends || []; // Get the friend IDs array

    // Step 3: For each friend, add the new playlist to their UserPlaylist collection
    await Promise.all(friendIds.map(async (friendId) => {
      // Fetch each friend's details to get their userName
      const friend = await users.findUserById(friendId);
      const friendUserName = friend?.userName || "Unknown";  // Default to "Unknown" if userName not found

      // Prepare play data for each friend's UserPlaylist
      const friendPlayData = {
        userID: friendId,
        userName: friendUserName,  // Use the friend's username
        playName,
        playId
      };

      // Add or update the UserPlaylist for each friend
      await userplaylists.insertOrUpdateUserPlay(friendPlayData);
    }));

    res.status(201).send({ message: 'Playlist successfully created and added to friends' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});
// Route to get a playlist by ID
app.get('/playlist/:id/:saved', async (req, res) => {
  try {
    const player = await playlists.findPlayById(req.params.id,req.params.saved); 
    if (player) {
      res.status(200).send(player);
    } else { 
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get a playlist by name
app.get('/playlistName/:playName', async (req, res) => {
  try {
    const play = await playlists.findPlayByName(req.params.playName); 
    if (play) {
      res.status(200).send(play);
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get a playlist by username
app.get('/playlistUser/:userName', async (req, res) => {
  try {
    
    const play = await playlists.findPlayByUserName(req.params.userName); 
    if (play) {
      res.status(200).send(play);
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to get a playlist by userID
app.get('/playlistUserID/:userID', async (req, res) => {
  try {
    const player = await playlists.findPlayByUserID(req.params.userID); 
    if (player) {
      res.status(200).send(player);
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to get a playlist by genre
app.get('/playlistGenre/:genre', async (req, res) => {
  try {
    const player = await playlists.findPlayByGenre(req.params.genre); 
    if (player) {
      res.status(200).send(player);
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get a playlist by tags
app.post('/playlistTags', async (req, res) => {
  try {
    let tags = req.body.tags;

    // Ensure 'tags' is an array
    if (!Array.isArray(tags)) {
      throw new Error('Tags should be an array');
    }

    const player = await playlists.findPlayByTags(tags);

    if (player) {
      res.status(200).send(player);
    } else {
      res.status(404).send({ error: 'No matching playlists found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to update a playlists details
app.put('/playlists/:id', async (req, res) => {
  try {
    const updated = await playlists.updatePlay(req.params.id, req.body.playData); 
    if (updated) {
      res.status(200).send({ message: 'Playlist details successfully updated' });
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to delete a playlist
app.delete('/playlists/:id', async (req, res) => {
  try {
    const deleted = await playlists.deletePlay(req.params.id); 
    if (deleted) {
      res.status(200).send({ message: 'Playlist successfully deleted' });
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});



//*******************Comment routes************************************

// Route to insert by comment
app.post('/addComment', async (req, res) => {
  try {
    const commId = await comments.insertComment(req.body.commData); 
    res.status(201).send({ message: 'Comment successfully added', id: commId });
    console.log('Comment successfully inserted with ID: ' + commId);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get a comment by ID
app.get('/comment/:id', async (req, res) => {
  try {
    const comm = await comments.findCommentById(req.params.id); 
    if (comm) {
      res.status(200).send(comm);
    } else {
      res.status(404).send({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get a comment by playlistID
app.get('/commentPlay/:playId', async (req, res) => {
  try {
    const comm = await comments.findCommentByPlayId(req.params.playId); 
    if (comm) {
      res.status(200).send(comm);
    } else {
      res.status(404).send({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});





app.put('/comment/:id', async (req, res) => {
  try {
    const updated = await comments.updateComment(req.params.id, req.body.commData); 
    if (updated) {
      res.status(200).send({ message: 'Comment successfully updated' });
    } else {
      res.status(404).send({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


app.delete('/comment/:id', async (req, res) => {
  try {
    const deleted = await comments.deleteComment(req.params.id); 
    if (deleted) {
      res.status(200).send({ message: 'Comment successfully deleted' });
    } else {
      res.status(404).send({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


//Route to add a song to a users songlist
app.post('/user/:id/addSong', async (req, res) => {
  const userID = req.params.id;
  const songID = req.body.songID; 

  try {
      const result = await songlists.addSongToUserList(userID, songID);
      res.status(200).send(result);
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
});

app.get('/user/songList/:id', async (req, res) => {
  const userID = req.params.id; 

  try{
      
      const songList = await songlists.getUserSongList(userID);
      res.status(200).send({ songs: songList.songs });
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
});

app.get('/search', async (req, res) => {
  const query = req.query.q; 

  try {
      const results = await searchAcrossCollections(query);
      res.status(200).send(results);
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
});

async function searchAcrossCollections(query) {
  const songResults = await songs.collection.find({
      $or: [
          { songTitle: { $regex: query, $options: 'i' } }, 
          { songArtist: { $regex: query, $options: 'i' } }, 
      ]
  }).toArray();

  const userResults = await users.collection.find({
      $or: [
          { userName: { $regex: query, $options: 'i' } }, 
          { fullName: { $regex: query, $options: 'i' } } 
      ]
  }).toArray();

  const playlistResults = await playlists.collection.find({
      playName: { $regex: query, $options: 'i' },
  },{
    playGenre: { $regex: query, $options: 'i' },
}).toArray();

  return {
      songs: songResults,
      users: userResults,
      playlists: playlistResults
  };
}

//*******************User Playlist routes************************************

// Route to insert a new UserPlaylist document
app.post('/addUserPlay', async (req, res) => {
  try {
    const playId = await userplaylists.insertPlay(req.body.playData); 
    res.status(201).send({ message: 'Playlist successfully created', id: playId });
    console.log('Playlist successfully inserted with ID: ' + playId);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post('/user/createSongList', async (req, res) => {
  const { userID, userName, songs } = req.body;

  try {
    const result = await songlists.insertSongList({
      userID,
      userName,
      songs,
    });

    res.status(201).json({ message: result });
  } catch (error) {
    console.error("Error creating song list:", error);
    res.status(500).json({ error: "Failed to create song list" });
  }
});
// Route to get a playlist by ID
app.get('/userPlaylist/:id', async (req, res) => {
  try {
    const player = await userplaylists.findPlayById(req.params.id); 
    if (player) {
      res.status(200).send(player);
    } else { 
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to get a playlist by name
app.get('/userPlaylistName/:playName', async (req, res) => {
  try {
    const playName = req.params.playName;

    // Query to find a playlist where at least one play within `plays` has a matching name
    const playlist = await userplaylists.collection.findOne({
      'plays.name': playName,
    }, {
      projection: {
        plays: { $elemMatch: { name: playName } } // Retrieve only the matched play within `plays`
      }
    });

    if (playlist && playlist.plays.length > 0) {
      const play = playlist.plays[0]; // Since we matched only one play, it will be the first element in the array
      res.status(200).send(play);
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to get a playlist by username
app.get('/userPlaylistUser/:userName', async (req, res) => {
  try {
    
    const play = await userplaylists.findPlayByUserName(req.params.userName); 
    if (play) {
      res.status(200).send(play);
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to get a playlist by userID
app.get('/userPlaylistUserID/:userID', async (req, res) => {
  try {
    const player = await userplaylists.findPlayByUserID(req.params.userID); 
    if (player) {
      res.status(200).send(player);
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to get a playlist by genre
app.get('/userPlaylistGenre/:genre', async (req, res) => {
  try {
    const player = await userplaylists.findPlayByGenre(req.params.genre); 
    if (player) {
      res.status(200).send(player);
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get a playlist by tags
app.post('/userPlaylistTags', async (req, res) => {
  try {
    let tags = req.body.tags;

    // Ensure 'tags' is an array
    if (!Array.isArray(tags)) {
      throw new Error('Tags should be an array');
    }

    const player = await userplaylists.findPlayByTags(tags);

    if (player) {
      res.status(200).send(player);
    } else {
      res.status(404).send({ error: 'No matching playlists found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to update a playlists details
app.put('/userPlaylists/:id', async (req, res) => {
  try {
    const updated = await userplaylists.updateUserPlay(req.params.id, req.body.playData); 
    if (updated) {
      res.status(200).send({ message: 'Playlist details successfully updated' });
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Route to delete a playlist
app.delete('/userPlaylists/:id', async (req, res) => {
  try {
    const deleted = await userplaylists.deletePlay(req.params.id); 
    if (deleted) {
      res.status(200).send({ message: 'Playlist successfully deleted' });
    } else {
      res.status(404).send({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


//images 
app.post('/api/images', async (req, res) => {
  
  try {
    const response = await images.insertImage(req.body);
    res.status(201).json({ message: response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/images/:name', async (req, res) => {
  try {
    const image = await images.findImageByName(req.params.name);
    res.json({ rep: image.rep });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete('/api/images/:name', async (req, res) => {
  try {
    const response = await images.deleteImageByName(req.params.name);
    res.json({ message: response });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});