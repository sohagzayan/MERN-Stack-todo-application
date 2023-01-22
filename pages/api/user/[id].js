import User from "../../../models/user";
import bcrypt from "bcrypt";
import dbConnection from "../../../utility/dbConnection";

export default async function user(req, res) {
  const { method , query } = req;
  dbConnection();
  console.log("id => " + query.id)
  if (method == "GET") {
    try {
            const activeUser = await User.findOne({_id : query.id})
            console.log(activeUser)
            res.send(activeUser)

    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
