import UserModel from "@/models/userModel";
import { NextApiRequest, NextApiResponse } from "next";

async function findUserById(id: string) {
  const user = await UserModel.findOne({ _id: id });
  console.log(id);
  return user;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  console.log(id);
  
  if (!id) {
    return res.status(400).json({ message: "Missing user ID" });
  }
  
  try {
    const user = await findUserById(id as string);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.verified) {
      return res.status(200).json({
        message: "Email already verified",
        userInfo: user,
      });
    }

    user.verified = true;
    await user.save();
    res.redirect("/confirmation-success")
  } catch (error) {
    res.redirect("/confirmation-error")
  }
}
