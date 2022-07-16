import express from "express";
import mongoose from "mongoose";
import VoteQues from "../models/voteCountQues.js";
import VoteAns from "../models/voteCountAns.js";

const router = express.Router();

router.post("/question/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;

    VoteQues.find({ question_id: id }, (err, found) => {
      if (err) throw err;

      if (found) {
        const voteCheck = found.some((vote) => user.name == vote.user.name);

        if (voteCheck) {
          return res.status(200).send({ message: "Already Voted" });
        } else {
          const newEntry = new VoteQues({
            question_id: id,
            user: user,
          });
          newEntry.save();
          return res.status(201).send({ message: "Voted Success" });
        }
      } else {
        const newEntry = new VoteQues({
          question_id: id,
          user: user,
        });
        newEntry.save();
        return res.status(201).send({ message: "Voted Success" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/answer/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { user, question_id } = req.body;

    VoteAns.find({ answer_id: id }, (err, found) => {
      if (found) {
        const voteCheck = found.some((vote) => user.name == vote.user.name);

        if (voteCheck) {
          return res.status(200).send({ message: "Already Voted" });
        } else {
          const newEntry = new VoteAns({
            answer_id: id,
            question_id: question_id,
            user: user,
          });
          newEntry.save();
          return res.status(201).send({ message: "Voted Success" });
        }
      } else {
        const newEntry = new VoteAns({
          answer_id: id,
          question_id: question_id,
          user: user,
        });
        newEntry.save();
        return res.status(201).send({ message: "Voted Success" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
