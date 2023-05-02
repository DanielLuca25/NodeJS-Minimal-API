const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

app.post("/", (req, res) => {
  res.json({ body: req.body });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
