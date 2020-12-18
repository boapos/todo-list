import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Components/Form'
import TodoList from './Components/TodoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)
  const [select, setSelect] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    // Retrieve from local storage
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }

    if(localStorage.getItem('id') === null) {
      localStorage.setItem('id', JSON.stringify([]))
    } else {
      setId(Number(localStorage.getItem('id')))
    }
  }, [])

  useEffect(() => {
    // filter
    switch(select){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
    }

    // Save to local storage
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('id', id)

  }, [id, todos, select])

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form select={select} setSelect={setSelect} id={id} setId={setId} todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
