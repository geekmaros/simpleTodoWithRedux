import React from 'react'
import SingleTodo from "../todos/singleTodo.component";

import './allTodo.style.sass'

const AllTodoComponent = ({todos}) => {
    return (
        <div className='container-fluid'>
            <h1 className='title' >TODOS++</h1>

            {
                todos.map((todo, i) => <SingleTodo key={i} todo={todo}/> )
            }
        </div>
    )
}



export default AllTodoComponent

