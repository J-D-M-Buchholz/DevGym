import { UnFollowUser, deleteUser, followUser, getUser, updateUser } from "@/controller/dashboard/userController";
import express from "express";

const router = express.Router();

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", UnFollowUser);

export default router;
