import React, { useState } from "react";

const Counter = () => {
  // let count = 0;

  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  const [title, setTitle] = useState("Counter App");

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleChange = (event) => {
    setNewCount(+(event.target.value));
  };

  const handleClick = () => {
    setCount(newCount);
    setTitle(`Counter App with count: ${newCount}`);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <input type="number" value={''+ newCount} onChange={handleChange}></input>
      <button onClick={handleClick}>Change count</button>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 10)}>Increment 10</button>
      <button onClick={() => setCount(count - 10)}>Decrement 10</button>
    </>
  );
};

export default Counter;
