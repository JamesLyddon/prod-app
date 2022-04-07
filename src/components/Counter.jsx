import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <span>Counter</span>
      </div>
      <div>
        <button className="btn btn-warning" onClick={() => setCount(count - 1)}>
          -
        </button>
        <span className="fs-4">{count}</span>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <div>
        <button className="btn btn-danger" onClick={() => setCount(0)}>
          reset
        </button>
      </div>
    </>
  );
}
