import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
    },
    email: {
      type: String,
      required: [true, "Please enter the email."],
      unique: [true, "Email already in use."],
    },
    image: {
      type: String,
    },
    bookmarks: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
