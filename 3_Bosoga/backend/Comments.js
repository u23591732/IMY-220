const { ObjectId } = require('mongodb');
class Comments {
  
  constructor(db) {
    this.collection = db.collection('Comments'); 
  }

  
  async insertComment(commData) {
    try {
      const result = await this.collection.insertOne(
        {playlistId : commData.playlistId,
        comment: commData.comment,
        pic : commData.pic,
        }
      );
      if(result.insertedId)
      {
        return "Comment added with ID : " + result.insertedId ;
      }
    } catch (error) {
      throw new Error('Error inserting comment : ' + error.message);
    }
  }

  
  async findCommentById(id) {
    try {
      const comm = await this.collection.findOne({ _id: new ObjectId(id) });
      return comm;
    } catch (error) {
      throw new Error('Error finding comment : ' + error.message);
    }
  }

 
  async findCommentByPlayId(playID) {
    try {
      const comm = await this.collection.find({ playlistId: playID }).toArray();
      return comm;
    } catch (error) {
      throw new Error('Error finding comment : ' + error.message);
    }
  }

 

  async updateComment(id,commData) {
    try {
      const result = await this.collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { playlistId : commData.playlistId,
            comment : commData.comment,
            pic : commData.pic}}
      );
      
      if(result.modifiedCount > 0 )
      {
        return result.modifiedCount + " record" + (result.modifiedCount > 1 ? "s" : "") + "  successfully updated.";
      }
    } catch (error) {
      throw new Error('Error updating comment : ' + error.message);
    }
  }

  async deleteComment(id) {
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

module.exports = Comments;
