const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    time: {
      type: String,
      required: true,
      default: new Date()
        .toString()
        .split(" ")
        .filter((e, i) => i <= 3)
        .join(" ")
        .trim(),
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("task", taskSchema);
