import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  picture: {
    type: String,
  },
});

const User = new mongoose.model("Users", userSchema);

export default User;
