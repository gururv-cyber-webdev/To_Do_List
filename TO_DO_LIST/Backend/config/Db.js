import mongoose from "mongoose";

const connectdb = async() => {
    const con = await mongoose.connect(process.env.MONGO)
    console.log("MongoDb connected")
}

export default connectdb