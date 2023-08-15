import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contentController from "@/controller/content/contentController";

const app = express();

dotenv.config();

app.use(cors());

app.get("/api/content/contentroute", contentController);

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
