import mongoose from 'mongoose';
const { model, Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const CourseSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    author: {
      type: ObjectId,
      required: true,
      ref: 'User',
    },
    places: [
        {
            type: ObjectId,
            ref: 'Place'
        }
    ],
    rating: Number,
    tag: [
      {
        type: String,
      }
    ],
    isDone: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  });

  export default model('Course', CourseSchema);
