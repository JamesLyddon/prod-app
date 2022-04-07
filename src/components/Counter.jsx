import React, { useState } from "react";
import { Container, Col, Row, Button, Alert, Form } from "react-bootstrap";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container className="text-center">
      <Row>
        <Col lg={{ span: 3 }}>
          <Alert variant="info" className="m-4">
            <Form>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="name me..."
              ></Form.Control>
            </Form>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 3 }} className="d-flex justify-content-around">
          <Button
            className="btn btn-warning"
            onClick={() => setCount(count - 1)}
          >
            -
          </Button>
          <span className="fs-4">{count}</span>
          <Button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 3 }}>
          <Alert
            variant="warning"
            className="m-4 d-flex justify-content-around"
          >
            <Button className="btn btn-warning p-1" onClick={() => setCount(0)}>
              save
            </Button>
            <Button className="btn btn-warning p-1" onClick={() => setCount(0)}>
              load
            </Button>
            <Button
              className="btn btn-warning p-1 "
              onClick={() => setCount(0)}
            >
              reset
            </Button>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
