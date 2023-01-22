import authGard from "../../../middleware/authGard";
async function getData(req, res) {
  if (req.method == "GET") {
    res.send({ message: "You Get Data Finaly" });
  }
}

export default getData;
