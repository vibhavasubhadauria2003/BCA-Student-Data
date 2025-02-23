
import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    profileImage: {
      type: String, //cloudinary url
      required: true,
      index: true,
    },
    
    about: {
      type: String,
      required: true,
      index: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    profession: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    dob: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    father_name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    mother_name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    user_location: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
  },
  {
    timestamps: true,
  }
);


export const User = mongoose.model("User", userSchema);
