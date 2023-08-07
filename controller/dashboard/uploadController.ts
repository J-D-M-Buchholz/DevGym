import stream from "stream"
import { Request, Response } from "express"
import { GridFSBucket, MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.URL
if (!uri) {
  throw new Error("URL is not defined in environment variables")
}
const client = new MongoClient(uri)

const dbName = "forum"

export const uploadFile = async (req: Request, res: Response) => {
  try {
    await client.connect()
    const db = client.db(dbName)
    const bucket = new GridFSBucket(db)
    if (!req.file) {
      return res.status(400).json("File is missing");
    }
    
    const bufferStream = new stream.PassThrough();
    bufferStream.end(req.file.buffer);
    

    bufferStream
      .pipe(bucket.openUploadStream(req.file.originalname))
      .on("error", (error) => {
        console.error(error)
        return res.status(500).json("File upload failed")
      })
      .on("finish", () => {
        console.log("File uploaded")
        return res.status(200).json("File uploaded successfully")
      })
  } catch (error) {
    console.error(error)
    return res.status(500).json("File upload failed")
  } finally {
    await client.close()
  }
}
