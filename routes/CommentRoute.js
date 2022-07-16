import express from "express";
import CommentDB from "../models/Comments.js";

const router = express.Router();

router.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { comment, user } = req.body;

    await CommentDB.create({
      question_id: id,
      comment: comment,
      user: user,
    })
      .then((response) => {
        res.status(201).send({ message: "Comment added successfully" });
      })
      .catch((err) => {
        res.status(400).send({ message: "Cannot add your comment" });
      });
  } catch (error) {
    res.status(400).send({ message: "Cannot add your comment" });
  }
});

export default router;
