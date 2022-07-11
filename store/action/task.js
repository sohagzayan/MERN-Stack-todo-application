import {startFetching , successFetching , getError} from '../type/type'
import axios from 'axios'
import {useDispatch , useSelector} from 'react-redux'
import getTaskReducer from './../reducer/getTaskReducer';
const getTask = (query)=>{
        return async (dispatch)=>{
                dispatch({type : startFetching})
                 await axios.get(`/api/task/?statusType=${query}`)
                 .then((res) => {
                        setTimeout(() => {
                                dispatch({type : successFetching , payload : {data : res.data , query : 'New'}})
                        }, 400);
                 })
                 .catch((error)=> dispatch({type : getError , payload : {error : error.message}}))
        }
}

export default getTask