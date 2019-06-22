import React, { useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './TodoView.css'


function TodoView() {
    const [todos, setTodos] = useState([
        { title:"foo1", description:"lorem", isDone: false },
        { title:"foo2", description:"lorem", isDone: false },
        { title:"foo3", description:"lorem", isDone: false },
        { title:"foo5", description:"lorem", isDone: false },
        { title:"foo6", description:"lorem", isDone: false },
        { title:"foo7", description:"lorem", isDone: false },
    ])

    return (
        <Container>
            {todos.map(todo => (
                <Row><Todo todo={todo}/></Row>
            ))}
        </Container>
    )
}

function Todo({ todo }) {
    return (
        <div>
            <Row>
                <Col><p>{todo.title}</p></Col>
                <Col><p>{todo.description}</p></Col>
            </Row>
        </div>
    )
}

export default TodoView