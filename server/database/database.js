import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongooDB connected Successfully");
  } catch (error) {
    console.log("MongoDB connection Error", error);
  }
};
export default ConnectDB;
