import React from "react";
import {MdDateRange} from 'react-icons/md'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiDeleteBin5Line} from 'react-icons/ri'
import StatusModal from "./StatusModal";
import axios from 'axios'
import taskAction from '../store/action/task'
import {useDispatch , useSelector} from 'react-redux'
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
import swal from 'sweetalert';
import { IoWarningOutline } from 'react-icons/io';

const Task = ({task , handleCurrentTask}) => {
  AOS.init();
        const dispatch = useDispatch()
        const {taskName , taskDes , date, taskStatus , _id} = task
        const handleDeleteTask = async (id)=>{

          swal({
            title: "Are you sure?",
            text: "Delete This Task ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
             
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
               axios.delete(`/api/task/${id}`)
              .then((res)=> console.log('delete Success'))
              dispatch(taskAction(taskStatus))

            } else {
              swal("Your imaginary file is safe!");
            }
          });



            
        }
        const getFerfactStatus =()=>{
            if(taskStatus == 'New'){
              return <button className="btn btn-xs bg-light_cine border-none">{taskStatus}</button>
            }else if(taskStatus == 'Progress'){
              return  <button className="btn btn-xs bg-[#00DD9F] border-none">{taskStatus}</button>
            }else if(taskStatus == 'Completed'){
              return  <button className="btn btn-xs bg-[#5CC672] border-none">{taskStatus}</button>
            }else if(taskStatus == 'Canceled'){
              return  <button className="btn btn-xs bg-[#ED2672] border-none">{taskStatus}</button>
            }
        }
  return (
    <div
    // initial={{transform : 'translateY(40px)' , opacity: 0 }}
    // animate={{transform : 'translateY(0px)' , opacity: 1}}
    // transition={{ ease: "easeOut", duration: .3 }}
    // data-aos="fade-down"
    data-aos="fade-up"
    className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title capitalize">{taskName}</h2>
        <p>
          {taskDes}
        </p>
        <div className="card-actions justify-between items-center">
          <div>
            <span className="flex  items-center">
              <MdDateRange className="text-xl mr-2" />
              {date}
              <label onClick={()=> handleCurrentTask(task)} htmlFor="my-modal-6" className="cursor-pointer">
              <AiOutlineEdit className="text-xl mr-2 ml-3  text-dark_purple" />
              </label>
              
              <RiDeleteBin5Line onClick={()=>handleDeleteTask(_id)}  className="text-xl mr-2  cursor-pointer     text-dark_purple" />
            </span>
          </div>
          {

          getFerfactStatus()
          }
        </div>
      </div>
    
    </div>
  );
};

export default Task;
