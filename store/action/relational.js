import axios  from "axios"

const relational = ()=> {
    return async (dispatch)=> {
        dispatch({type : 'START_FETCH'})
        try {
          const res =  await axios.get('http://localhost:3000/api/getactiveuserdetails/62dbda0101ad3ec1698cee17')
         dispatch({type : 'START_SUCCESS' , payload : res.data})

        } catch (error) {
         dispatch({type : 'GET_ERROR' , payload : error.message})
            
        }
    }
}
export default relational