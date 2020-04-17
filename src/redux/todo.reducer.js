import * as Types from './actionTypes'
import {removeTodo} from "./todo.utils";

const  INITIAL_STATE= {
    todo: []
}
const todoReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case Types.ADD_TODO:
            return{
                ...state,
                todo: state.todo.concat( action.payload)
            }
        case Types.REMOVE_TODO:
            return {
                ...state,
                todo: removeTodo(state.todo, action.payload)
            }

        default:
            return state
    }
}

export default todoReducer