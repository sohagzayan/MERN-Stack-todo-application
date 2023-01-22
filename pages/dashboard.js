import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../store/action/relational";
const Dashboard = () => {
  const [userTotalTask, setUserTotalTask] = useState([]);
  const dispatch = useDispatch();
  const userAuth = useSelector((current) => current.relationalReducer);
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/dashboard");
      setDashboard(data);
      // console.log("dashboard", data);
    };
    getData();
  }, [dashboard]);

  return (
    <div className="px-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-5">
        <motion.div
          initial={{ transform: "translateY(50px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="card p-4 bg-base-100 shadow-md"
        >
          <h5 className="text-xl  font-bold text-blue_dark mb-2">Total New</h5>
          <span className="text-2xl font-bold">{dashboard.newTask}</span>
        </motion.div>

        <motion.div
          initial={{ transform: "translateY(50px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="card p-4 bg-base-100 shadow-md"
        >
          <h5 className="text-xl  font-bold text-blue_dark mb-2">
            Total Progress
          </h5>
          <span className="text-2xl font-bold">{dashboard.progressTask}</span>
        </motion.div>

        <motion.div
          initial={{ transform: "translateY(50px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="card p-4 bg-base-100 shadow-md"
        >
          <h5 className="text-xl  font-bold text-blue_dark mb-2">
            Total Completed
          </h5>
          <span className="text-2xl font-bold">{dashboard.completedTask}</span>
        </motion.div>

        <motion.div
          initial={{ transform: "translateY(50px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="card p-4 bg-base-100 shadow-md"
        >
          <h5 className="text-xl  font-bold text-blue_dark mb-2">
            Total Canceled
          </h5>
          <span className="text-2xl font-bold">{dashboard.completedTask}</span>
        </motion.div>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
