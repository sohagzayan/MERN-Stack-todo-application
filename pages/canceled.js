import {useState , useEffect} from 'react'
import task from "../store/action/task";
import { useDispatch, useSelector } from "react-redux";
import Task from "../components/Task";
import StatusModal from "../components/StatusModal";

const Canceled = () => {
  const [currentTask, setCurrentTask] = useState({});
  const dispatch = useDispatch();
  const taskData = useSelector((current) => current.getTaskReducer);

  const handleCurrentTask = (task) => {
    setCurrentTask(task);
  };
  useEffect(() => {
    dispatch(task("Canceled"));
  }, []);

  return (

      <div className="px-6 mt-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                  {
                      taskData?.tasks.map((task)=> <Task
                      key={task._id} 
                        task={task}
                        handleCurrentTask={handleCurrentTask}
                      /> )  
                  }
          </div>
          <StatusModal  currentTask={currentTask} query="Canceled" />
      </div>
  );
};
export default Canceled;
