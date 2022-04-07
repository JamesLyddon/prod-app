import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Timer() {
  const [timer, setTimer] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [timerComplete, setTimerComplete] = useState(false);

  // initialise interval globally
  let interval = null;

  useEffect(() => {
    // time incrementer
    if (isRunning && timer !== 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // cleanup function
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (timer === 0) {
      setIsRunning(false);
      setTimerComplete(true);
    }
  }, [timer]);

  return (
    <Container>
      {isRunning ? (
        <Row>
          <Col lg={{ span: 3 }}>
            <div className="d-flex justify-content-center align-items-center text-center mb-4">
              <span className="position-absolute text-primary font-weight-bolder">
                {timer}
              </span>
              <span className="spinner-border text-warning lh-1" role="status">
                <span className="visually-hidden">Loading...</span>
              </span>
            </div>
          </Col>
        </Row>
      ) : null}

      <Button onClick={() => setIsRunning(true)}>Start</Button>
      <Button onClick={() => setIsRunning(false)}>Stop</Button>
      <Button onClick={() => setIsRunning(true)}>Resume</Button>
      <Button onClick={() => setTimer(0)}>Clear</Button>
      {timerComplete ? <p>Finished!</p> : ""}
    </Container>
  );
}
