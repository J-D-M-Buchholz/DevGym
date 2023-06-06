import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createPost } from "@/controller/dashboard/postController";


const app = express();

dotenv.config();

app.use(cors());

app.post('/api/dashboard/post', createPost)

const startServer = async (): Promise<void> => {
  try {
    await connectDB(process.env.URL);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

startServer();

export default app;