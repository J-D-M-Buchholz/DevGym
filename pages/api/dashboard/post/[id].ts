import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  deletePost,
  getPost,
  updatePost,
} from "@/controller/dashboard/postController";

const app = express();

dotenv.config();

app.use(cors());

app.get("/api/dashboard/post/:id", getPost);
app.put("/api/dashboard/post/:id", updatePost);
app.delete("/api/dashboard/post/:id", deletePost);

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
