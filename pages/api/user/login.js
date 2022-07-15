import User from "../../../models/user";
import bcrypt from "bcrypt";
import dbConnection from "../../../utility/dbConnection";
import jwt from "jsonwebtoken";

export default async function user(req, res) {
  const { method } = req;
  dbConnection();
  
  if (method == "POST") {
    try {
      const user = await User.find({ email: req.body.email });
      console.log(req.body.email)
      if (user) {
        const isValidPassword = await bcrypt.compare(req.body.password , user[0].password)
        if (isValidPassword) {
            const token = jwt.sign( {userId: user[0]._id,fastName: user[0].fastName,lastName: user[0].lastName,},
              process.env.JWT_SECRET,
              { expiresIn: "2h" }
            );
            res.status(200).json({ token: token, user : user[0] , message: "successFully Login User" });
          } else {
            res.status(401).json({ message: "Login Fail " });
          }
     
      } else {
        res.status(401).json({ message: "Authorization Failed" });
      }
    } catch (error) {
      console.log(error)
      res.status(500).json(error.message);
    }
  }
}
