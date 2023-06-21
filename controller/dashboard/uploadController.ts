import { Request, Response } from 'express';
import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    const destinationFolder = 'public/images';
    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder, { recursive: true });
    }
    cb(null, destinationFolder);
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage }).single("file");

export const uploadFile = (req: Request, res: Response) => {
  upload(req, res, (error: any) => {
    if (error) {
      console.error(error);
      return res.status(500).json("File upload failed");
    }
    console.log("File uploaded");
    return res.status(200).json("File uploaded successfully");
  });
};
