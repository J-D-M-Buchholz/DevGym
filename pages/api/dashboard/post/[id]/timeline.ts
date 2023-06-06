import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getTimelinePosts } from "@/controller/dashboard/postController";


const app = express();

dotenv.config();

app.use(cors());

app.get('/api/dashboard/post/:id/timeline', getTimelinePosts)

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