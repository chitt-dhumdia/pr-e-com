import mongoose from "mongoose";
import envConfig from "./dotenv.js";

const db = async () => {
  try {
    await mongoose.connect(envConfig.MONGODB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default db;