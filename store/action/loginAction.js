
const loginAction = ()=>  {
    return async (dispatch)=>{
        console.log("loading")
        dispatch({type : "LOADING"})
        const token = JSON.parse(localStorage.getItem('TU'))
        if(token){
            dispatch({type : "SUCCESS"})
            console.log("token")
        }
    }

}


export default loginAction