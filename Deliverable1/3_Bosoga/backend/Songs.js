const { ObjectId } = require('mongodb');
class Songs {
  
  constructor(db) {
    this.collection = db.collection('Songs'); 
  }

  
  async insertSong(songData) {
    try {
      const result = await this.collection.insertOne({
        songPic : songData.songPic,
        songTitle : songData.songTitle,
        songArtist : songData.songArtist,
        songLink: songData.songLink,
        deleted : songData.deleted,

      });
      if(result.insertedId)
      {
        return result.insertedId.toString();
      }
    } catch (error) {
      throw new Error('Error inserting song : ' + error.message);
    }
  }

  
  async findSongById(id) {
    try {
      const song = await this.collection.findOne({ _id: new ObjectId(id) });
      return song;
    } catch (error) {
      throw new Error('Error finding song  : ' + error.message);
    }
  }

 
  async findSongByTitle(title) {
    try {
      const song = await this.collection.findOne({ songTitle: title });
      return song;
    } catch (error) {
      throw new Error('Error finding song  : ' + error.message);
    }
  }

  
  async findSongByLink(link) {
    try {
      const song = await this.collection.findOne({ songLink : link });
      return song;
    } catch (error) {
      throw new Error('Error finding the song  : ' + error.message);
    }
  }

  
  async deleteSong(id) {
    try {
      const result = await this.collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { deleted: "true"} }
      );
      
      if(result.modifiedCount > 0 )
      {
        return result.modifiedCount + " record" + (result.modifiedCount > 1 ? "s" : "") + "  successfully updated.";
      }
     
    } catch (error) {
      throw new Error('Error updating deleting song : ' + error.message);
    }
  }
}

module.exports = Songs;
