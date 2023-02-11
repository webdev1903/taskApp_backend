const express = require("express");

const router = express.Router();

const Task = require("../models/task.model");

const authenticate = require("../middlewares/authenticate");

router.post("/", authenticate, async (req, res) => {
  try {
    const current = new Date()
      .toString()
      .split(" ")
      .filter((e, i) => i <= 3)
      .join(" ")
      .trim();
    const tasks = await Task.find({ userId: req.user._id, time: current });
    if (tasks.length == 5) {
      return res
        .status(405)
        .send({ message: "You can only add 5 tasks in a day" });
    }
    const task = await Task.create({
      ...req.body,
      userId: req.user._id,
    });
    // console.log(task);
    return res.status(201).send({ task, message: "task successfully created" });
  } catch (error) {}
});

router.get("/", authenticate, async (req, res) => {
  try {
    const current = new Date()
      .toString()
      .split(" ")
      .filter((e, i) => i <= 3)
      .join(" ")
      .trim();
    const tasks = await Task.find({ userId: req.user._id, time: current });
    return res.status(200).send(tasks);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
