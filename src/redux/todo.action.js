import * as Types from './actionTypes'
export const addTodo = todo =>  ({
    type: Types.ADD_TODO,
    payload: todo })


// export function addTodo (todo) {
//     return {type: 'ADD_TODO',
//     payload: todo}
// }