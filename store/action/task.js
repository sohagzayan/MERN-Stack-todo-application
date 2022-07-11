import {startFetching , successFetching , getError} from '../type/type'
import axios from 'axios'
import {useDispatch , useSelector} from 'react-redux'
import getTaskReducer from './../reducer/getTaskReducer';
const getTask = (query)=>{
        return async (dispatch)=>{
                dispatch({type : startFetching})
                 await axios.get(`http://localhost:3000/api/task/?statusType=${query}`)
                 .then((res) =>  dispatch({type : successFetching , payload : {data : res.data , query : 'New'}}))
                 .catch((error)=> dispatch({type : getError , payload : {error : error.message}}))
        }
}

export default getTask