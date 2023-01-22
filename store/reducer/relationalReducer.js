
const initialState = {
    loading : false,
    user : [],
    error : ""
}


const relationalReducer = (state = initialState , action)=> {

    switch (action.type) {
        case "START_FETCH":
            return {
                ...state,
                loading : true,
                user : [],
                error : ''
            }
        case "START_SUCCESS":
            return {
                ...state,
                loading : false,
                user : action.payload,
                error : ''
            }
            
        case "GET_ERROR":
            return {
                ...state,
                loading : false,
                user : [],
                error : action.payload
            }
            
    
        default:
            return state
    }





}

export default relationalReducer