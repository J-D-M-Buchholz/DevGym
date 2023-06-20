import UserModel from "@/models/userModel";
import bcrypt from "bcrypt";
import express from "express";
import Jwt from "jsonwebtoken";

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
