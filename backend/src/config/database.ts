import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;
export const connectDB = async () => {
  try {
    await mongoose.connect(`${URI}`);
    console.log("DB Connected");
  } catch (err) {
    console.error(err);
  }
};
