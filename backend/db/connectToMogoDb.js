import mongoose from "mongoose";
const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Sucessfully Connected to mongoDB");
  } catch (error) {
    console.log("error connecting to mngoDB" + error.message);
  }
};
export default connectToMongodb;
