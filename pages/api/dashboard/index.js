import dbConnection from "../../../utility/dbConnection";
import TaskSchema from "../../../models/task";
import UserSchema from "../../../models/user";
import authGard from "../../../middleware/authGard";
import cookie from "js-cookie";

async function dashboard(req, res) {
  const { method } = req;
  dbConnection();
  if (method === "GET") {
    const newTask = await TaskSchema.find({ taskStatus: "new" });
    const progressTask = await TaskSchema.find({ taskStatus: "progress" });
    const completedTask = await TaskSchema.find({ taskStatus: "completed" });
    const canceledTask = await TaskSchema.find({ taskStatus: "canceled" });
    const dashboard = {
      newTask: newTask.length,
      progressTask: progressTask.length,
      completedTask: completedTask.length,
      canceledTask: canceledTask.length,
    };
    res.send(dashboard);
  }
}

export default dashboard;
