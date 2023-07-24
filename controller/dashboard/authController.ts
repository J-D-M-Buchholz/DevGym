import UserModel from "@/models/userModel";
import bcrypt from "bcrypt";
import express from "express";
import Jwt from "jsonwebtoken";
import sendVerificationEmail from "@/pages/api/email-verification/sendEmail";
import nodemailer from "nodemailer"

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"

const app = express();

export const registerUser = async (
  req: express.Request,
  res: express.Response
) => {
  const salt = await bcrypt.genSalt(10);

  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;

  const newUser = new UserModel(req.body);
  const { username } = req.body;
  try {
    const oldUser = await UserModel.findOne({ username });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const user = await newUser.save();

    const token = Jwt.sign(
      {
        username: user.username,
      },
      process.env.JWT as string,
      { expiresIn: "2h" }
    );
    const mailOptions = {
      from: "teamdevgym@gmail.com",
      to: user.username,
      subject: "DevGym registration",
      html: `<h2>Thank you for your registration.</h2> </br> <p>Your DevGym team!</p>`,
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "teamdevgym@gmail.com",
        pass: "fnfmnsoochmyrlue",
      },
    })
    await transporter.sendMail(mailOptions)
    await sendVerificationEmail({ _id:user._id.toString(), username: user.username})
    res.status(200).json({ user, token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const loginUser = async (
  req: express.Request,
  res: express.Response
) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    
    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if (validity) {
        const token = Jwt.sign(
          {
            username: user.username,
          },
          process.env.JWT as string,
          { expiresIn: "2h" }
        );
        res.status(200).json({ user, token });
      } else {
        res.status(400).json("Wrong Password");
      }
    } else {
      res.status(404).json("User does not exists");
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};


