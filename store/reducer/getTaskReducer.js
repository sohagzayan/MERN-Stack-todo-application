import {startFetching , successFetching , getError} from '../type/type'
const initialState = {
        tasks: [],
        loading : false,
        error : '',
       
}

const getTaskReducer = (state = initialState ,  action)=>{

        switch(action.type){
                case startFetching :
                        return {
                                ...state,
                                loading : true,
                                tasks : [],
                        }
                case successFetching :
                        return {
                                ...state,
                                loading : false,
                                tasks : action.payload.data,
                        }
                case getError :
                        return {
                                ...state,
                                loading : false,
                                tasks : [],
                                error : action.payload.error
                        }

                default :
                        return state
        }
}

export default getTaskReducer