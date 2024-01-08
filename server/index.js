const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  const [name, email, password] = req.body;
  console.log(name);
  res.json();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
