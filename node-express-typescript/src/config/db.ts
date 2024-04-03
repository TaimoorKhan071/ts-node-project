import mongoose from "mongoose"; 

export const connectMongoDB = async () => {
    await mongoose.connect(process.env.DBURI || "");
    console.log('db connected...')
};
