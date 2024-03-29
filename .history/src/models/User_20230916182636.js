import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
    details: {
      age: { type: Number },
      gender: { type: String },
      picture: 0,
    },
    books: {
      type: [],
    },
    booksSeeLater: {
      type: [],
    },
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);