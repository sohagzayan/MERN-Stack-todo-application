import {authLoading , authSuccess , authError} from '../type/type'
import axios from 'axios'

const auth = ()=>{
        return async (dispatch)=>{
                dispatch({type : authLoading})
                const items = JSON.parse(localStorage.getItem('TU'));
                console.log(items)
                await axios.get(`http://localhost:3000/api/user/${items?.userId}`)
                .then((res) => {
                        console.log(res.data)
                 dispatch({type : authSuccess , payload : res.data})
                })
                .catch((error)=> dispatch({type : authError , payload : error.message}))
                }
}
export default auth