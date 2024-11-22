const { ObjectId } = require('mongodb');

class Images {
  constructor(db) {
    this.collection = db.collection('Images');
  }

  
  async insertImage(imageData) {
    try {
     
      const existingImage = await this.collection.findOne({ name: imageData.name });
      if (existingImage) {
        throw new Error('Image with this name already exists');
      }

      const result = await this.collection.insertOne({
        name: imageData.name,
        rep: imageData.rep
      });

      if (result.insertedId) {
        return `Image added with ID: ${result.insertedId} and the name: ${imageData.name}`;
      }
    } catch (error) {
      throw new Error('Error inserting image: ' + error.message);
    }
  }

  
  async findImageByName(name) {
    try {
      const image = await this.collection.findOne({ name });
      if (!image) {
        throw new Error('Image not found');
      }
      return image;
    } catch (error) {
      throw new Error('Error finding image: ' + error.message);
    }
  }

  
  async deleteImageByName(name) {
    try {
      const result = await this.collection.deleteOne({ name });
      if (result.deletedCount === 0) {
        throw new Error('Image not found');
      }
      return `${result.deletedCount} record successfully deleted.`;
    } catch (error) {
      throw new Error('Error deleting image: ' + error.message);
    }
  }
}

module.exports = Images;