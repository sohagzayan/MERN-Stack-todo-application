
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
import {openModal , closeModal} from '../store/type/type'
import Image from 'next/image'
import {Provider} from 'react-redux'
import store from '../store/store'
import  Layout  from '../components/Layout'
const InProgress = ({data}) => {
      const [currentTask , setCurrentTask] = useState({})
     const dispatch =  useDispatch()
     const taskData = useSelector((current)=> current.getTaskReducer)
     const modalStatus = useSelector((current)=> current.closeModalReducer)

     
      const handleCurrentTask = (task)=>{
            dispatch({type : openModal})
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
                  <StatusModal currentTask={currentTask} query="Progress" />
                  :
                  null
            }
      </div>;
};


InProgress.getLayout = function getLayout(page) {
      return (
        <Provider store={store}>
            <Layout>
              {page}
            </Layout>
        </Provider>
      )
    }



export default InProgress;