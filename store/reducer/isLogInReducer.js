
const initialState = {
    loading : false ,
    isLogIn : false,
    error : ""
}

const  isLogInReducer = (state = initialState , action)=> {

    switch (action.type) {
        case "LOADING":
           return {
                ...state,
                loading : true,
                isLogIn : false,
                error : ''
           }
        case "SUCCESS":
           return {
                ...state,
                loading : false,
                isLogIn : true,
                error : ''
           }
        case "ERROR":
           return {
                ...state,
                loading : false,
                isLogIn : false,
                error : action.payload
           }
    
        default:
            return state
    }

}

export default isLogInReducer