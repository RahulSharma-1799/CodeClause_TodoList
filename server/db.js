import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoURI = process.env.MONGODB_URL;
const connectToMongo = async () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true });
    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })
    mongoose.connection.on("disconnected", () => {
      console.log("Database disconnected");
    });
    mongoose.connection.on("error", () => {
      console.log(`Error while connecting to database `,error.message);
    });
};

export default connectToMongo;
