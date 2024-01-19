import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/user.model.js";
import bcrypt from "bcryptjs";

const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

dotenv.config({
  path: "./env",
});

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: " http://localhost:3000",
  })
);

mongoose.connect(process.env.MONGOODB_URI);

app.get("/test", (req, res) => {
  res.send("This is working");
  console.log("App is working");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (error) {
    res.send(422).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userData = await User.findOne({ email });

  if (userData) {
    res.json("Found");
  } else {
    res.json("Not found");
  }
});

app.listen(4000, () => {
  console.log("App is running fine");
});
