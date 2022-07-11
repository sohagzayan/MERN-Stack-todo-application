import {loadingStart , loadingEnd} from '../type/type'
const initialState = {
        loading : false
}

const loadingReducer = (state = initialState , action)=> {
        switch (action.type) {
                case loadingStart:
                     return {
                        ...state,
                        loading : state.loading = true
                     } 
                case loadingEnd:
                     return {
                        ...state,
                        loading : state.loading = false
                     } 
                default:
                      return state
        }
}

export default loadingReducer