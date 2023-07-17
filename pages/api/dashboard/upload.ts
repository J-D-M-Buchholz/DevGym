import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from 'multer';
import { uploadFile } from "@/controller/dashboard/uploadController";

const app = express();

dotenv.config();

app.use(cors());

const upload = multer({ dest: '/upload' });

app.post("/api/dashboard/upload", upload.single('file'), uploadFile);

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
