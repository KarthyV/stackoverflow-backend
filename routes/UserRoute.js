import express from "express";
import User from "../models/Users.js";

const router = express.Router();

router.post("/new", (req, res) => {
  try {
    const { currentUser } = req.body;

    User.findOne({ email: currentUser.email }, (err, foundUser) => {
      if (err) throw err;
      if (foundUser) {
        return res
          .status(200)
          .send({ message: "User Exists - Login Successful" });
      } else {
        const user = new User(currentUser);
        user.save();
        return res.status(200).send({ message: "Login Successful" });
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Login not successful" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Unable to get Users" });
  }
});

export default router;
