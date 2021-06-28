import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let iniTodo;
  if (localStorage.getItem('todos') === null) {
    iniTodo = [];
  }
  else {
    iniTodo = JSON.parse(localStorage.getItem('todos'));
  }
  function onDelete(todo) {
    //console.log('onDelete todo', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function addTodo(title, desc) {
    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }



  const [todos, setTodos] = useState(iniTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <div className="App">
      <Router>
        <Header title="My ToDos" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
