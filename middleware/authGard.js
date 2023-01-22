import jwt from "jsonwebtoken";

const authGard = (handler) => {
  return async (req, res) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      // console.log("token" + token)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { userId, fastName } = decoded;
      req.userId = userId;
      req.fastName = fastName;
      return handler(req, res);
    } catch (error) {
      console.log(error);
    }
  };
};

export default authGard;
