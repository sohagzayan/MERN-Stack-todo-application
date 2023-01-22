import User from "../../../models/user";
import Pending from "../../../models/pending";
import bcrypt from "bcrypt";
import dbConnection from "../../../utility/dbConnection";
import jwt from "jsonwebtoken";

export default async function user(req, res) {
  const { method } = req;
  dbConnection();
  
  if (method == "POST") {
    const alreadyPendingUser = await Pending.find({ email: req.body.email});
    const pendingUser = alreadyPendingUser.length > 0 ? await bcrypt.compare(req.body.password , alreadyPendingUser[0].password) : false
    const user = await User.find({ email: req.body.email });

    try {
      if(pendingUser){
        return res.send({ message: "User Not verified ! please check your mail already Send verifi mail." });
      }

      console.log("user 1 =  " + user)
      if (user.length > 0) {
        console.log("user 2= " + user)
        const isValidPassword =  await bcrypt.compare(req.body.password , user[0].password)
        if (isValidPassword) {
            const token = jwt.sign( {userId: user[0]._id,fastName: user[0].fastName,lastName: user[0].lastName,},
              process.env.JWT_SECRET,
              { expiresIn: "2h" }
            );
            return res.status(200).send({ token: token, user : user[0] , message: "SuccessFully Login User" });
          } else {
            return res.send({ message: "Authorization Failed ! Credentials not Valid"  });
          }
      
      } else {
          console.log("fail to log")
         return res.send({ message: "Authorization Failed ! Credentials not Valid" });
      }

    } catch (error) {
      console.log(error)
      res.status(500).send(error.message);
    }
  }
}

