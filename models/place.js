import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const PlaceSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: String,
    latitude: String,
    longitude: String,
  });

  export default model('Place', PlaceSchema);
