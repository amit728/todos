import React, { useState } from 'react'

function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function submit(e) {
        e.preventDefault();
        if (!title || !desc) {
            alert('Title or description can not be blank');
        } else {
            addTodo(title, desc);
        }
        setTitle("");
        setDesc("");
    }
    return (
        <div className="container">
            <div className="card text-left mt-5 bg-info text-light">
                <div className="card-body">
                    <h3>Add Todo</h3>
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Todo Title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" placeholder="Enter Todo Title" id="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Todo Description</label>
                            <textarea className="form-control" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="desc" placeholder="Todo Description" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-warning">Add Todo</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;
