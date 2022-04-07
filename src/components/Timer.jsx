import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(5);
  const [isActive, setIsActive] = useState(false);

  function countDown() {
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }

  return (
    <Container>
      <Button onClick={countDown}>click</Button>
      <p>{timeLeft}</p>
    </Container>
  );
}
