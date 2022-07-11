import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios'
const UseTaskData = (query) => {
        const [taskList , setTaskList] = useState([])

        useEffect(()=>{
                 axios.get(`/api/task/?statusType=${query}`)
                .then((res)=> setTaskList(res.data))
        },[])

        return [taskList , setTaskList]
}

export default UseTaskData;
