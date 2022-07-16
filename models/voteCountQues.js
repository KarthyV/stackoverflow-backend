import mongoose from "mongoose";

const voteCountSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
  },
  user: Object,
});

const VoteQues = mongoose.model("VoteCountQuestion", voteCountSchema);

export default VoteQues;
