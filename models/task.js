import mongoose from "mongoose";

const task = mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskDes: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  taskStatus: {
    type: String,
    default: "new",
    lowercase: true,
  },
});

export default mongoose.models.Task || mongoose.model("Task", task);
