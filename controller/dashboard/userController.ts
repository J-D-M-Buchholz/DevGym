import UserModel from "@/models/userModel";
import bcrypt from "bcrypt";
import express from "express";

const app = express();

export const getUser = async (req: express.Request, res: express.Response) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);

    if (user) {
      const userObject = user.toObject();
      const { password, ...otherDetails } = userObject;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  const id = req.params.id;

  const { currentUserId, currentUserAdminStatus } = req.body;

  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only delete your own profile");
  }
};

export const followUser = async (
  req: express.Request,
  res: express.Response
) => {
  const id = req.params.id;

  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      if (followUser) {
        const followingUser = await UserModel.findById(currentUserId);
        if (followingUser) {
          if (!followUser.followers.includes(currentUserId)) {
            await followUser.updateOne({ $push: { followers: currentUserId } });
            await followingUser.updateOne({ $push: { following: id } });
            res.status(200).json("User followed!");
          } else {
            res.status(403).json("User is Already followed by you");
          }
        } else {
          res.status(404).json("No such user exists");
        }
      } else {
        res.status(404).json("No such user exists");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export const UnFollowUser = async (
  req: express.Request,
  res: express.Response
) => {
  const id = req.params.id;

  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      if (followUser) {
        const followingUser = await UserModel.findById(currentUserId);
        if (followingUser) {
          if (followUser.followers.includes(currentUserId)) {
            await followUser.updateOne({ $pull: { followers: currentUserId } });
            await followingUser.updateOne({ $pull: { following: id } });
            res.status(200).json("User Unfollowed!");
          } else {
            res.status(403).json("User is not followed by you");
          }
        } else {
          res.status(404).json("No such user exists");
        }
      } else {
        res.status(404).json("No such user exists");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
