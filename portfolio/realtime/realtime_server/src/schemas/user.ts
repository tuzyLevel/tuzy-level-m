import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
