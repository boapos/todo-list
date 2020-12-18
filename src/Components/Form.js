import React from 'react'

function Form({ select, setSelect, id, setId, inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = e => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = e => {
    e.preventDefault()
    setTodos([
      ...todos, {id: id, text: inputText, completed: false}
    ])
    setId(prev => prev + 1)
    setInputText('')
  }

  const selectionHandler = e => {
    setSelect(e.target.value)
  }

  return (
    <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus"></i>
      </button>
      <div className="select">
        <select onChange={selectionHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
