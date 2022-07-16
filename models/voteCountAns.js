import mongoose from "mongoose";

const voteCountSchema = new mongoose.Schema({
  answer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
  },
  user: Object,
});

const VoteAns = mongoose.model("VoteCountAnswer", voteCountSchema);

export default VoteAns;
