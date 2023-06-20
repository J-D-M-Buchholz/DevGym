import jwt, { VerifyErrors } from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();

const authMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    if (token) {
      jwt.verify(token, process.env.JWT! as jwt.Secret , (error: VerifyErrors | null, decoded: any) => {
        if (error) {
          console.log(error);
        } else {
          console.log(decoded);
          req.body._id = decoded?.id;
        }
      });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleWare;
