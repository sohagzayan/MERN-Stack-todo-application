
// import {MdDateRange} from 'react-icons/md'
// import {AiOutlineEdit} from 'react-icons/ai'
// import {RiDeleteBin5Line} from 'react-icons/ri'
import {useState , useEffect} from 'react'
import Task from '../components/Task'
import axios from 'axios'
import StatusModal from '../components/StatusModal';
import { useRouter } from 'next/router';
import {useDispatch , useSelector} from 'react-redux'
import task from '../store/action/task'
const InProgress = ({data}) => {
      const [currentTask , setCurrentTask] = useState({})
     const dispatch =  useDispatch()
     const taskData = useSelector((current)=> current.getTaskReducer)
     
      const handleCurrentTask = (task)=>{
              setCurrentTask(task)
      }
      useEffect(()=>{
            dispatch(task("Progress"))
      },[])
  return <div className="px-6 mt-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                  {
                        taskData.tasks?.map((task)=> <Task 
                        key={task._id}
                        task={task}
                        handleCurrentTask={handleCurrentTask}
                        /> )
                  }
            </div>
            <StatusModal currentTask={currentTask} query="Progress" />
      </div>;
};






export default InProgress;