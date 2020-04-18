import React from 'react'
import {connect} from 'react-redux'
import {removeTodo} from "../../redux/todo.action";
import './singleTodo.style.sass'

const SingleTodo = ({todo, removeItem}) => (
    <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
        <div className="card">
            <div className="card-content">
                <div className="content">
                    {todo}
                </div>
                <div className='remove' onClick={ () => removeItem(todo)}>
                    <button>&#x2613;</button>
                </div>

        </div>
    </div>
    </div>
    </div>
)
const  mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeTodo(item))
})
export default connect(null, mapDispatchToProps)(SingleTodo)