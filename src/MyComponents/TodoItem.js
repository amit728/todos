import React from 'react';

function TodoItem(props) {
    return (
        <div className="container text-left">
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{props.todo.title}</h5>
                    <p className="card-text">{props.todo.desc}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;