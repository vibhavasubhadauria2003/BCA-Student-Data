// import { type } from "express/lib/response";
import mongoose, { Schema } from "mongoose";
// import jwt from "jsonwebtoken";
// import bcript from "bcrypt";

const userSchema = new Schema(
  {
    servename: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    profileImage: {
      type: String, //cloudinary url
      required: true,
    },
    about: {
      type: String,
      required: true,
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
// userSchema.pre("save", async function () {
//   if (this.isModified("password")) {
//     this.password = bcript.hash(this.password);
//   }
//   next();
// });

// userSchema.methods.isPasswordCorrect = async function (password) {
//   return await bcript.compare(password, this.password);
// };

export const User = mongoose.model("User", userSchema);
