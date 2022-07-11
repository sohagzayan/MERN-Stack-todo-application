import React,{useState , useEffect} from "react";

import {useDispatch , useSelector} from 'react-redux'
import StatusModal from "../components/StatusModal";
import Task from "../components/Task";
import task from '../store/action/task'

const Complete = () => {
        const [currentTask , setCurrentTask] = useState({})
        const dispatch =  useDispatch()
        const taskData = useSelector((current)=> current.getTaskReducer)
        
         const handleCurrentTask = (task)=>{
                 setCurrentTask(task)
         }
         useEffect(()=>{
               dispatch(task("Completed"))
         },[])
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
      <StatusModal currentTask={currentTask}  query="Completed" />
    </div>
  );
};

export default Complete;
