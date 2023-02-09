const express = require("express");
const cors = require("cors");
const connect = require("./src/configs/db");

require("dotenv").config();

const { register, login } = require("./src/controllers/auth.controller");
const taskController = require("./src/controllers/task.controller");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", register);
app.post("/login", login);
app.use("/tasks", taskController);

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("listening on port " + process.env.PORT);
  } catch (error) {
    console.log(error);
  }
});
