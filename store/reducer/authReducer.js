import {authLoading , authSuccess , authError} from '../type/type'


const initialValue = {
      loading : false,
      auth : {},
      isLoggedIn : false,
      error : ""   
}

const authReducer = (state = initialValue , action)=> {

        switch (action.type) {
                case authLoading:
                       return{
                                ...state,
                                loading :  true,
                                auth :  {},
                                isLoggedIn : false ,
                                error :  ""
                       } 
                case authSuccess:
                       return{
                                ...state,
                                loading :  false,
                                auth :  action.payload,
                                isLoggedIn : true ,
                                error :  ""
                       } 
                case authError:
                       return{
                                ...state,
                                loading :  false,
                                auth :  {},
                                isLoggedIn : false ,
                                error :  action.payload
                       } 
                        
                default:
                       return state
        }
}

export default authReducer