import express from "express";
import AnswerDB from "../models/Answers.js";

const router = express.Router();

router.post("/:id", async (req, res) => {
  const { answers, user } = req.body;

  const { id } = req.params;
  const answerData = new AnswerDB({
    question_id: id,
    answers: answers,
    user: user,
  });

  await answerData
    .save()
    .then((response) =>
      res
        .status(201)
        .send({ message: "Your answer has been added successfully" })
    )
    .catch((err) =>
      res.status(400).send({ message: "Unable to add your answer" })
    );
});

export default router;
