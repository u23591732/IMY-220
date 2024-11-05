const { ObjectId } = require('mongodb');
class Users {
  
  constructor(db) {
    this.collection = db.collection('Users'); 
  }

  
  async insertUser(userData) {
    try {
      const result = await this.collection.insertOne({
        profilePic: userData.profilePic ,
         fullName: userData.fullName, 
         userName : userData.userName, 
         pronouns: userData.pronouns,
        bio : userData.bio,
        insta : userData.insta,
        ex: userData.ex,
        tik: userData.tik,
        password : userData.password
      });
      if(result.insertedId)
      {
        return "User added with ID : " + result.insertedId;
      }
    } catch (error) {
      throw new Error('Error inserting user : ' + error.message);
    }
  }

  
  async findUserById(id) {
    try {
      const user = await this.collection.findOne({_id: new ObjectId(id) });
      return user;
    } catch (error) {
      throw new Error('Error finding user : ' + error.message);
    }
  }

 
  async findUserByName(theName) {
    try {
      const user = await this.collection.findOne({userName:theName});
      return user;
    } catch (error) {
      throw new Error('Error finding user : ' + error.message);
    }
  }


  

  async findUserFriends(userId) {
    try {
      
      if (!ObjectId.isValid(userId)) {
        throw new Error("Invalid user ID format");
      }
  
      const user = await this.collection.aggregate([
        { $match: { _id: new ObjectId(userId) } },
        {
          $lookup: {
            from: 'Users', 
            let: { friendsArray: "$friends" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $in: ["$_id", { $map: { input: "$$friendsArray", as: "friendId", in: { $toObjectId: "$$friendId" } } }]
                  }
                }
              }
            ],
            as: 'friendsList'
          }
        },
        {
          $project: {
            
            friendsList: 1 
          }
        }
      ]).toArray();
  
      return user;
    } catch (error) {
      console.error('Failed to fetch friends:', error); 
      throw new Error('Could not fetch friends');
    }
  }

  async updateUser(id,userData) {
    try {
        const result = await this.collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { profilePic: userData.profilePic , fullName: userData.fullName , userName : userData.userName , pronouns: userData.pronouns , bio : userData.bio,insta : userData.insta ,ex: userData.ex,tik: userData.tik } }
      );
      
      if(result.modifiedCount > 0 )
      {
        return result.modifiedCount + " record" + (result.modifiedCount > 1 ? "s" : "") + "  successfully updated.";
      }
     
    } catch (error) {
      throw new Error('Error updating user : ' + error.message);
    }
  }

  async deleteUser(id) {
    try {
      const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
      if(result.deletedCount > 0 )
        {
          return result.deletedCount + " record" + (result.deletedCount > 1 ? "s" : "") + "  successfully updated.";
        }
       
      
    } catch (error) {
      throw new Error('Error deleting user : ' + error.message);
    }
  }
}


module.exports = Users;
