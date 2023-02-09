const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("listening on port " + process.env.PORT);
  } catch (error) {
    console.log(error);
  }
});
