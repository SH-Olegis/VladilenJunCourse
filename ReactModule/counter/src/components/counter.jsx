import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const stateTitle = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";

    return classes;
  };

  return (
    <>
      <h1 className={stateTitle()}>Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => (count === 0 ? "" : setCount(count - 1))}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
