const { ObjectId } = require('mongodb');
class UserPlaylists {
  
  constructor(db) {
    this.collection = db.collection('UserPlaylists'); 
  }

  
  async insertPlay(playData) {
    try {
      const result = await this.collection.insertOne(
        {
        userName : playData.userName,
        userId : playData.userId,
        
        

        
        plays: [...playData.plays]}
      );
      if(result.insertedId)
      {
        return "UserPlaylist added with ID : " + result.insertedId + "for user : " + playData.userName;
      }
    } catch (error) {
      throw new Error('Error inserting user : ' + error.message);
    }
  }

  
  async findUserPlayById(id) {
    try {
      const play = await this.collection.findOne({ _id: new ObjectId(id) });
      return play;
    } catch (error) {
      throw new Error('Error finding playlist : ' + error.message);
    }
  }

  async insertOrUpdateUserPlay(playData) {
    try {
      const { userID, userName, playName, playId } = playData;
  
      
      let userPlaylist = await this.collection.findOne({ userID }); 
  
      if (userPlaylist) {
        
        await this.collection.updateOne(
          { userID },
          { $push: { plays: { name: playName, id: playId, saved: false } } }
        );
        return `Playlist added to existing UserPlaylist for userID: ${userID}`;
      } else {
        
        const result = await this.collection.insertOne({
          userName,
          userID,
          plays: [{ name: playName, id: playId, saved: false }]
        });
        return `UserPlaylist created with ID: ${result.insertedId} for userID: ${userID}`;
      }
    } catch (error) {
      throw new Error('Error inserting/updating user playlist: ' + error.message);
    }
  }


  async findAll() {
    try {
      return await this.collection.find({}).toArray(); 
    } catch (error) {
      throw new Error('Error fetching playlists: ' + error.message);
    }
  }
  

  async findUserPlayByUserName(user) {
    try {
      const play = await this.collection.find({ userName : user }).toArray();
      return play;
    } catch (error) {
      throw new Error('Error finding playlist : ' + error.message);
    }
  }

  async findPlayByUserID(userId) {
    try {
      const play = await this.collection.find({ userID: userId }).toArray();
      return play;
    } catch (error) {
      throw new Error('Error finding playlist : ' + error.message);
    }
  }

  async updateUserPlay(id,playData) {
    try {
      const result = await this.collection.updateOne(
          { 
              _id: new ObjectId(id), 
              "plays.playID": playData.playID 
          },
          { 
              $set: { 
                  "plays.$": playData 
              } 
          }
      );
      
      if (result.modifiedCount > 0) {
          return `${result.modifiedCount} record${result.modifiedCount > 1 ? "s" : ""} successfully updated.`;
      } else {
          return 'No records updated, possibly because the play was not found.';
      }
  } catch (error) {
      throw new Error('Error updating playlist: ' + error.message);
  }
  }

  

  
  async deletePlay(id) {
    try {
      const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
      if(result.deletedCount > 0 )
        {
          return result.deletedCount + " record" + (result.deletedCount > 1 ? "s" : "") + "  successfully updated.";
        }
       
      
    } catch (error) {
      throw new Error('Error deleting playlist : ' + error.message);
    }
  }
}

module.exports = UserPlaylists;
