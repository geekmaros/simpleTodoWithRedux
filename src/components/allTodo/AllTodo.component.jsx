import React from 'react'
import SingleTodo from "../todos/singleTodo.component";

import './allTodo.style.sass'

const AllTodoComponent = ({todos}) => {
    return (
        <div className='container-fluid'>
            <h1 className='title' >TODO++</h1>

            <div className='todo'>
            {

                todos.length === 0 ? <div className='no-todo'> 🙄️️NO TODO LIST !!!</div> :
                todos.map((todo, i) => <SingleTodo className='todo' key={i} todo={todo}/> )
            }
            </div>
        </div>
    )
}



export default AllTodoComponent

