import React,{useState ,useEffect } from 'react';
import axios from 'axios'
import Task from '../components/Task';
import StatusModal from '../components/StatusModal';
import { useRouter } from 'next/router';
import {useDispatch , useSelector} from 'react-redux'
import task from '../store/action/task'

const NewTask = ({data}) => {
        const [currentTask , setCurrentTask] = useState({})
        
        const dispatch =  useDispatch()
        const taskData = useSelector((current)=> current.getTaskReducer)
        useEffect(()=>{
                dispatch(task('New'))
        },[])

  

        const handleCurrentTask = (task)=>{
                setCurrentTask(task)
        }
        return (
                <div className="px-6 mt-6">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                              {
                                taskData.tasks?.map((task)=> <Task 
                                key={task._id}
                                task={task}
                                handleCurrentTask={handleCurrentTask}
                                />)
                              }  
                        </div>
                        <StatusModal currentTask={currentTask}  query="New" />
                </div>
        );
}

export default NewTask;
