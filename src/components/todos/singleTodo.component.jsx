import React from 'react'
import './singleTodo.style.sass'

const SingleTodo = ({todo}) => (
    <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
        <div className="card">
            <div className="card-content">
                <div className="content">
                    {todo}
                </div>

        </div>
    </div>
    </div>
    </div>
)

export default SingleTodo