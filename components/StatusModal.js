import React,{useState} from "react";
import axios from 'axios'
import {useDispatch , useSelector} from 'react-redux'
import {startFetching , closeModal , openModal} from '../store/type/type'
import task from '../store/action/task'
const StatusModal = ({ currentTask , query }) => {
        const dispatch = useDispatch()
        
        const [status , setStatus] = useState("")
        const {taskStatus , _id} = currentTask
        const handleStatusUpdate = async (id)=>{
                dispatch({type : closeModal})
                const res = await axios.put(`/api/task/${id}`, {taskStatus : status})
                console.log(res)
                dispatch(task(query))
        }

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
         <div className="pt-7">
         <select onChange={(e)=> setStatus(e.target.value)} className="select w-full border-2 bg-[#11bde042] ">
                <option>{taskStatus}</option>
                <option>New</option>
                <option>Completed</option>
                <option>Progress</option>
                <option>Canceled</option>
        </select>
        <button onClick={()=>handleStatusUpdate(_id)} className="btn bg-light_cine border-none mt-5">Ok</button>
         </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
