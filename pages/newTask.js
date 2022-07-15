import React,{useState ,useEffect } from 'react';
import axios from 'axios'
import Task from '../components/Task';
import StatusModal from '../components/StatusModal';
import { useRouter } from 'next/router';
import {useDispatch , useSelector} from 'react-redux'
import task from '../store/action/task'
import {openModal , closeModal} from '../store/type/type'
import UseTaskData from '../hocks/useTaskData';
import Image from 'next/image'
import  Layout  from '../components/Layout'
import {Provider} from 'react-redux'
import store from '../store/store'

const NewTask = ({data}) => {
        const [taskList , setTaskList] = UseTaskData('New')
        console.log(taskList)

        const [currentTask , setCurrentTask] = useState({})
        const dispatch =  useDispatch()
        const taskData = useSelector((current)=> current.getTaskReducer)
        const modalStatus = useSelector((current)=> current.closeModalReducer)
        useEffect(()=>{
                dispatch(task('New'))
        },[])

  

        const handleCurrentTask = (task)=>{
                dispatch({type : openModal})
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

                         {
                                taskData?.tasks.length > 0
                                ?
                                null
                                :
                                <div className="flex items-center justify-center pt-36 flex-col">
                                <h3 className="font-bold md:text-3xl text-xl mb-3">
                                   Yat Not Available Task
                                </h3>   
                                   <Image src="/verified.png" width={150} height={150} />
                                </div>

                         }     






                        {
                                modalStatus.open 
                                ?
                                <StatusModal currentTask={currentTask}  query="New" />
                                :
                                null
                        }
                </div>
        );
}

NewTask.getLayout = function getLayout(page) {
        return (
                <Provider store={store}>
                        <Layout>
                                {page}
                        </Layout>
                </Provider>
        )
      }



export default NewTask;
