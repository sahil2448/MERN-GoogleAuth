import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

export const DbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};
