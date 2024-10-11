const { ObjectId } = require('mongodb');
class Playlists {
  
  constructor(db) {
    this.collection = db.collection('Playlists'); 
  }

  
  async insertPlay(playData) {
    try {
      const result = await this.collection.insertOne(
        {playPic : playData.playPic,
        playBio : playData.playBio,
        playName : playData.playName,
        playUser : playData.playUser,
        playUserId : playData.playUserId,
        playGenre : playData.playGenre,
        playTags: playData.playTags,
        songs: [...playData.songs]}
      );
      if(result.insertedId)
      {
        return "Playlist added with ID : " + result.insertedId + "and the name : " + playData.playName;
      }
    } catch (error) {
      throw new Error('Error inserting user : ' + error.message);
    }
  }

  
  async findPlayById(id) {
    try {
      const play = await this.collection.findOne({ _id: new ObjectId(id) });
      return play;
    } catch (error) {
      throw new Error('Error finding playlist : ' + error.message);
    }
  }

 
  async findPlayByName(name) {
    try {
      const play = await this.collection.findOne({ playName: name });
      return play;
    } catch (error) {
      throw new Error('Error finding playlist : ' + error.message);
    }
  }

  async findPlayByUserName(user) {
    try {
      const play = await this.collection.find({ playUser: user }).toArray();
      return play;
    } catch (error) {
      throw new Error('Error finding playlist : ' + error.message);
    }
  }

  async findPlayByUserID(userID) {
    try {
      const play = await this.collection.find({ playUserId: userID }).toArray();
      return play;
    } catch (error) {
      throw new Error('Error finding playlist : ' + error.message);
    }
  }

  async findPlayByGenre(genre) {
    try {
      const play = await this.collection.find({ playGenre: genre }).toArray();
      return play;
    } catch (error) {
      throw new Error('Error finding playlist : ' + error.message);
    }
  }

  async findPlayByTags(tags) {
    try {
     
      if (!Array.isArray(tags)) {
        throw new Error('Tags should be an array');
      }
  
      
      const regexConditions = tags.map(tag => ({
        playTags: { 
          $regex: tag.split('#')[1] ? `.*${tag.split('#')[1]}.*` : '.*', 
          $options: 'i'
        }
      }));
  
      
      const play = await this.collection.find({
        $or: regexConditions
      }).toArray();
      
      return play;
    } catch (error) {
      throw new Error('Error finding playlist: ' + error.message);
    }
  }

  async updatePlay(id,playData) {
    try {
      const result = await this.collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { playPic : playData.playPic,
            playBio : playData.playBio,
            playName : playData.playName,
            playUser : playData.playUser,
            playUserId : playData.playUserId,
            playGenre : playData.playGenre,
            playTags: playData.playTags,
            songs: [...playData.songs]} }
      );
      
      if(result.modifiedCount > 0 )
      {
        return result.modifiedCount + " record" + (result.modifiedCount > 1 ? "s" : "") + "  successfully updated.";
      }
     
    } catch (error) {
      throw new Error('Error updating playlist : ' + error.message);
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

module.exports = Playlists;
