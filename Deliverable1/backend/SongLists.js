const { ObjectId } = require('mongodb');

class SongLists {
    constructor(db) {
        this.collection = db.collection('SongLists'); // Assuming the collection is named 'SongList'
    }

    // Method to insert a new song list (for new users)
    async insertSongList(listData) {
        try {
            const result = await this.collection.insertOne({
                userID: listData.userID,
                userName: listData.userName,
                songs: listData.songs // Assuming listData.songs is an array of song IDs
            });
            if (result.insertedId) {
                return `SongList added with ID: ${result.insertedId} and userName: ${listData.userName}`;
            }
        } catch (error) {
            throw new Error('Error inserting song list: ' + error.message);
        }
    }

    // Method to add a new song to an existing user's song list
    async addSongToUserList(userID, songID) {
        try {
            const result = await this.collection.updateOne(
                { userID: userID }, // Find the song list by user ID
                { $push: { songs: songID } } // Add new song ID to the 'songs' array
            );
            if (result.modifiedCount > 0) {
                return `Song with ID: ${songID} added to user ${userID}'s list.`;
            } else {
                return `User with ID: ${userID} not found.`;
            }
        } catch (error) {
            throw new Error('Error adding song to list: ' + error.message);
        }
    }

    async getUserSongList(userID) {
      try {
          const userList = await this.collection.findOne({ userID: userID }); // Fetch song list by userID
          if (!userList) {
              throw new Error('User not found');
          }
          return userList; // Return the user's song list, which contains song IDs
      } catch (error) {
          throw new Error('Error fetching user song list: ' + error.message);
      }
  }
}

module.exports = SongLists;
