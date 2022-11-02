import express from "express";
import Comment from "../schemas/comments";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const comment = await Comment.create({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    const result = await Comment.populate(comment, { path: "commenter" });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router
  .route("/:id")
  //   .get(async (req, res, next) => {
  //     try {
  //       const result = await Comment.find({});
  //       res.json(result);
  //     } catch (err) {
  //       console.error(err);
  //       next(err);
  //     }
  //   })
  .patch(async (req, res, next) => {
    try {
      const result = await Comment.updateOne(
        { _id: req.params.id },
        {
          comment: req.body.comment,
        }
      );
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const result = await Comment.remove({ _id: req.params.id });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

export default router;
