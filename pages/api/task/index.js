import dbConnection from "./../../../utility/dbConnection";
import TaskSchema from "../../../models/task";
import UserSchema from "../../../models/user";
import authGard from "../../../middleware/authGard";
import cookie from "js-cookie";
async function task(req, res) {
  const { method } = req;

  dbConnection();
  if (method === "POST") {
    const { taskName, taskDes, date, userId } = req.body;
    const newTask = await TaskSchema({ taskName, taskDes, date });
    const tasksNew = await newTask.save();

    console.log("new Task" + userId);

    await UserSchema.updateOne(
      {
        _id: userId,
      },
      {
        $push: {
          tasks: tasksNew._id,
        },
      }
    );
    res.send(newTask);
  } else if (method === "GET") {
    const getAllTask = await TaskSchema.find({
      taskStatus: req.query.statusType.toLowerCase(),
    });
    res.send(getAllTask);
  }
}

export default task;
