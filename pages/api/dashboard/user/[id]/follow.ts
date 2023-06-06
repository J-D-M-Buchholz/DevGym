import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { followUser } from "@/controller/dashboard/userController";

const app = express();

dotenv.config();

app.use(cors());

app.put("/api/dashboard/user/:id/follow", followUser);

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
