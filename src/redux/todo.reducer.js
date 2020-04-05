import * as Types from './actionTypes'
const  INITIAL_STATE= {
    todo: ['Play Game', 'Learn Redux']
}
const todoReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case Types.ADD_TODO:
            return{
                ...state,
                todo: state.todo.concat( action.payload)
            }
        default:
            return state
    }
}

export default todoReducer