import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div>
        <span>Counter</span>
      </div>
      <div>
        <Button className="btn btn-warning" onClick={() => setCount(count - 1)}>
          -
        </Button>
        <span className="fs-4">{count}</span>
        <Button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
      <div>
        <Button className="btn btn-danger" onClick={() => setCount(0)}>
          reset
        </Button>
      </div>
    </div>
  );
}
