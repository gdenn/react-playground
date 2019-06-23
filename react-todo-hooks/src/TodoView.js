import React, { useState, useCallback } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FaTrashAlt } from 'react-icons/fa'

import './TodoView.css'


const TodoView = () => {
  
  const [lastID, setLastID] = useState(4)

  const [todos, setTodos] = useState([
    { id:"1", title:"bring trash out" },
    { id:"2", title:"clean appartment" },
    { id:"3", title:"walk the dog" },
    { id:"4", title:"cook something" },
  ])
  
  const removeTodo = useCallback((todo) => {
    var newTodos = todos
    var index = newTodos.indexOf(todo)
    newTodos.splice(index)
    setTodos(newTodos)
  })

  const addTodo = useCallback((title) => {
    setLastID = lastID + 1
    setTodos({...todos, { id: lastID, title: title}})
  })

  return (
    <Container>
      {todos.map(todo => (
        <Todo todo={todo} removeTodo={removeTodo}/>
       ))}
    </Container>
  )
}

const Todo = (props) => {
  return (
    <Row>
      <Col md={5}><p>{props.todo.title}</p></Col>
      <Col md={1}><Button onClick={() => props.removeTodo(props.todo)}><FaTrashAlt/></Button></Col>
      <Col md={6}></Col>
    </Row>
  )
}

export default TodoView