import express from "express";
import connectDB from "@/db/connect";
import UserModel from "@/models/userModel";
import bcrypt from "bcrypt";

var codeStr = "";

export default async function handler(
  req: express.Request,
  res: express.Response
) {
  const { code, password } = req.body;

  if (req.method === "POST") {
    try {
      const user = await UserModel.findOne({ "verificationCode.code": code });
      
      if (!user || !user.verificationCode.expiresAt || user.verificationCode.expiresAt < new Date()) {
        return res.status(400).json({ message: "Invalid or expired code! Please try again." });
      }
      // console.log("User in enterCode post: ", user);
      codeStr = user.verificationCode.code;
      // console.log("codeStr: ", codeStr);

      await user.save();
      res.json({ message: "Code is valid!", user });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  } else if (req.method === "PUT") {
    try {
      const users = await UserModel.find();
      if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found!" });
      }
      let matchedUser = null;
      for (const user of users) {
        if (codeStr && user.verificationCode.code === codeStr) {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          user.password = hashedPassword;
          user.verificationCode.code = "";
          await user.save();
          matchedUser = user;
          break;
        }
      }
      if (!matchedUser) {
        return res.status(400).json({ message: "Password cannot be changed! Try again later or contact support" });
      }
      res.status(200).json({ message: "Password has been successfully changed!" });
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
};

(async () => {
  try {
    await connectDB(process.env.URL);
    console.log("MongoDB connected");
  } catch (e) {
    console.log(e);
  }
})();
