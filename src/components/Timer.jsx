import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Timer() {
  const [timer, setTimer] = useState(10000);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    // time incrementer
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    // cleanup function
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <Container>
      <Button onClick={() => setIsRunning(true)}>Start</Button>
      <Button onClick={() => setIsRunning(false)}>Stop</Button>
      <Button onClick={() => setIsRunning(true)}>Resume</Button>
      <Button onClick={() => setTimer(0)}>Clear</Button>
      <p>{timer}</p>
    </Container>
  );
}
