import React from 'react';
import TodoItem from './TodoItem';

function Todos(props) {
    return (
        <div className="container py-4 text-left">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="py-2">Todos List</h2>
                </div>
                {
                    props.todos.length === 0 ? "No todos found" :
                        props.todos.map((todo) => {
                            return (
                                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            )
                        })
                }
            </div></div>
    )
}

export default Todos;