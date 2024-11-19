import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("DB is already connected....");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("DB connected");
  } catch (err) {
    console.log("Error While connecting to DB", err);
  }
};

export default connectDB;
