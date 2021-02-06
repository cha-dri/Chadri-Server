import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const UserSchema = new Schema({
    nickname: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  });

  export default model('User', UserSchema);
