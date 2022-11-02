import express from "express";
import User from "../schemas/user";
import Comment from "../schemas/comments";
import { Schema, mongo } from "mongoose";

const {
  Types: { ObjectId },
} = Schema;

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get("/:id/comments", async (req, res, next) => {
  try {
    const comments = await Comment.find({
      //   commenter: req.params.id,
      commenter: req.params.id,
    }).populate("commenter");
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
