import React from "react";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

import TodoView from "./TodoView"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";

function App() {

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={2}/>
          <Col className="ml-sm-4 mb-sm-2 mt-sm-2">
            <Form inline>
              <FormControl type="text" placeholder="New Todo" className="mr-sm-1"/>
              <Button>Add</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <TodoView/>
    </div>
  );
}

export default App;
