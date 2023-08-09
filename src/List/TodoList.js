import React from 'react'

const TodoList = (props) => {
    const {todo} = props;
  return (
    <>
    <span>{todo.todo}<button>edit</button><button>remove</button></span><br/>
    </>
  )
}

export default TodoList
