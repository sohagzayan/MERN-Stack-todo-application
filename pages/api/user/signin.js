import Pending from "../../../models/pending";
import User from "../../../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dbConnection from "../../../utility/dbConnection";
import { sendConfirmationEmail } from "../../../utility/sendEmail";
export default async function user(req, res) {
  const { method } = req;
  dbConnection();
  if (method == "POST") {
    console.log("req body", req.body);
    try {
      const userData = req.body;
      const { avatar, name, email, password } = userData;
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashPassword,
        avatar: avatar,
      });
      const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "5h",
      });
      res.json({
        success: true,
        user,
        token,
      });
    } catch (error) {
      console.log("error", error);
      console.log("error messagess", error.message);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
}
