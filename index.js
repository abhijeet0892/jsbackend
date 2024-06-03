require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to js backend app!");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Welcome to YouTube!</h1>");
});

app.get("/twitter", (req, res) => {
  res.send("<h2>abhijeetchougule</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
