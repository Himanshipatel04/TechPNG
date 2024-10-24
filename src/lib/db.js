import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://himanshipatel0409:himanshi@cluster0.gozbdan.mongodb.net/";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function dbConnect() {
  try {
    const res = await mongoose.connect(MONGODB_URI,{dbName:"techpng"});
    // console.log(res);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Error connecting database!", error);
  }
}

export default dbConnect;
