import {openModal , closeModal} from '../type/type'
const initialState = {
        open : false
}

const closeModalReducer = (state = initialState , action)=>{

        switch (action.type) {
                case openModal:
                        return{
                                ...state,
                                open : state.open = true
                        }
                case closeModal:
                        return{
                                ...state,
                                open : state.open = false
                        }

                default:
                      return state
        }
}

export default closeModalReducer