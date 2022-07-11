import React from "react";
import {MdDateRange} from 'react-icons/md'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiDeleteBin5Line} from 'react-icons/ri'
import StatusModal from "./StatusModal";
import axios from 'axios'
import taskAction from '../store/action/task'
import {useDispatch , useSelector} from 'react-redux'
import { motion } from "framer-motion"

const Task = ({task , handleCurrentTask}) => {
        const dispatch = useDispatch()
        const {taskName , taskDes , date, taskStatus , _id} = task
        const handleDeleteTask = async (id)=>{
            await axios.delete(`https://full-stack-todo-application.vercel.app/api/task/${id}`)
            .then((res)=> console.log('delete Success'))
            dispatch(taskAction(taskStatus))
        }
  return (
    <motion.div
    initial={{transform : 'translateY(50px)' , opacity: 0 }}
    animate={{transform : 'translateY(0px)' , opacity: 1}}
    transition={{ ease: "easeOut", duration: .4 }}
    className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title capitalize">{taskName}</h2>
        <p>
          {taskDes}
        </p>
        <div className="card-actions justify-between items-center">
          <div>
            <span className="flex  items-center">
              <MdDateRange className="text-xl mr-2   " />
              {date}
              <label onClick={()=> handleCurrentTask(task)} htmlFor="my-modal-6" className="cursor-pointer">
              <AiOutlineEdit className="text-xl mr-2 ml-3  text-dark_purple" />
              </label>
              
              <RiDeleteBin5Line onClick={()=>handleDeleteTask(_id)}  className="text-xl mr-2  cursor-pointer     text-dark_purple" />
            </span>
          </div>
          <button className="btn btn-xs bg-light_cine border-none">{taskStatus}</button>
        </div>
      </div>
    
    </motion.div>
  );
};

export default Task;
