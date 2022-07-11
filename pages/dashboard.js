import {useEffect , useState} from 'react'
import axios from 'axios'
import { motion } from "framer-motion"

const Dashboard = () => {
   const [newStatus , setNewStatus] = useState([])
   const [progressStatus , setProgress] = useState([])
   const [completedStatus , setCompleted] = useState([])
   const [canceledStatus , setCanceled] = useState([])
   useEffect(()=>{
       axios.get('/api/task?statusType=New')
      .then((res)=> setNewStatus(res.data))
     
       axios.get('/api/task?statusType=Progress')
      .then((res)=> setProgress(res.data))

       axios.get('/api/task?statusType=Completed')
      .then((res)=> setCompleted(res.data))

       axios.get('/api/task?statusType=Canceled')
      .then((res)=> setCanceled(res.data))
     
   },[])
   


  return <div className="px-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-5">
            <motion.div
            initial={{transform : 'translateY(50px)' , opacity: 0 }}
            animate={{transform : 'translateY(0px)' , opacity: 1}}
            transition={{ ease: "easeOut", duration: .4 }}

            className="card p-4 bg-base-100 shadow-md">
               <h5 className="text-xl  font-bold text-blue_dark mb-2">
                  Total New
               </h5>
               <span className="text-2xl font-bold">
                 {newStatus.length}
               </span>
            </motion.div>


            <motion.div
               initial={{transform : 'translateY(50px)' , opacity: 0 }}
               animate={{transform : 'translateY(0px)' , opacity: 1}}
               transition={{ ease: "easeOut", duration: .6 }}
            className="card p-4 bg-base-100 shadow-md">
               <h5 className="text-xl  font-bold text-blue_dark mb-2">
                  Total Progress
               </h5>
               <span className="text-2xl font-bold">
                  {progressStatus.length}
               </span>
            </motion.div>


            <motion.div
               initial={{transform : 'translateY(50px)' , opacity: 0 }}
               animate={{transform : 'translateY(0px)' , opacity: 1}}
               transition={{ ease: "easeOut", duration: .8 }}
            className="card p-4 bg-base-100 shadow-md">
               <h5 className="text-xl  font-bold text-blue_dark mb-2">
                  Total Completed
               </h5>
               <span className="text-2xl font-bold">
                  {completedStatus.length}
               </span>
            </motion.div>

            <motion.div
               initial={{transform : 'translateY(50px)' , opacity: 0 }}
               animate={{transform : 'translateY(0px)' , opacity: 1}}
               transition={{ ease: "easeOut", duration: 1 }}
            className="card p-4 bg-base-100 shadow-md">
               <h5 className="text-xl  font-bold text-blue_dark mb-2">
                  Total Canceled
               </h5>
               <span className="text-2xl font-bold">
                  {canceledStatus.length}
               </span>
            </motion.div>
           
         
        </div>
  </div>;
};
export default Dashboard;