import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import TodoView from './TodoView'

function App() {

  return (
    <div className="App">
      <Container>
        <Navbar>
          <Navbar.Brand>React Todo's</Navbar.Brand>
          <Form inline>
            <FormControl type='text' placeholder='New Todo' className='mr-sm-2'/>
            <Button>Add</Button>
          </Form>
        </Navbar>
      </Container>
      <TodoView/>
    </div>
  );
}

export default App;
