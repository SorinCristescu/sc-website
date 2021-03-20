import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  language: {
    type: String,
    default: "english",
  },
  root: {
    type: Boolean,
    default: false,
  },
  timestamps: true,
});

let Dataset = mongoose.model.user || mongoose.model("user", userSchema);

export default Dataset;
