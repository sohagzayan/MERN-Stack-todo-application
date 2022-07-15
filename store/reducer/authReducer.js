import {authLoading , authSuccess , authError} from '../type/type'


const initialValue = {
      loading : false,
      auth : {},
      error : ""   
}

const authReducer = (state = initialValue , action)=> {

        switch (action.type) {
                case authLoading:
                       return{
                                ...state,
                                loading :  true,
                                auth :  {},
                                error :  ""
                       } 
                case authSuccess:
                       return{
                                ...state,
                                loading :  false,
                                auth :  action.payload,
                                error :  ""
                       } 
                case authError:
                       return{
                                ...state,
                                loading :  false,
                                auth :  {},
                                error :  action.payload
                       } 
                        
                default:
                       return state
        }
}

export default authReducer