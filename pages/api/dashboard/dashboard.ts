import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "@/routes/userRoute";
import postRouter from "@/routes/postRoute";

const app = express();

dotenv.config();

app.use(cors());

app.use('/api/dashboard/dashboard/user', userRouter)
app.use('/api/dashboard/dashboard/post', postRouter)

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
