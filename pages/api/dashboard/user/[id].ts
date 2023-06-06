import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  deleteUser,
  getUser,
  updateUser,
} from "@/controller/dashboard/userController";

const app = express();

dotenv.config();

app.use(cors());

app.get("/api/dashboard/user/:id", getUser);
app.put("/api/dashboard/user/:id", updateUser);
app.delete("/api/dashboard/user/:id", deleteUser);

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
