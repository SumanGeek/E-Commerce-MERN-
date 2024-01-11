import express from "express";
// import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import bcryptjs from "bcryptjs";
import User from "./models/user.model.js";
const app = express();
const port = 8000;

app.use(express.json());
//1RHJ5QAiltxjTvkR
app.use(cors());

const brycptSalt = bcryptjs.genSaltSync(10);

// mongoose.connect(process.env.MONGOO_URL || "mongodb://127.0.0.1:27017");
// console.log(process.env.MONGOO_URL);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const UserDoc = await User.create({
      name,
      email,
      password: bcryptjs.hashSync(password, brycptSalt),
    });
    res.json(UserDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const UserDoc = await User.findOne({ email });

  if (UserDoc) {
  } else {
    alert("User doesnot exit");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
