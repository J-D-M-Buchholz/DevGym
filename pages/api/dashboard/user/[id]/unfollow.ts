import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { unFollowUser } from "@/controller/dashboard/userController";


const app = express();

dotenv.config();

app.use(cors());

app.put("/api/dashboard/user/:id/unfollow", unFollowUser);

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
