import { useState, useEffect, React } from "react";

// useEffect:- The useEffect hook in React JS is primarily used to perform side effects within functional components. Side effects are actions that have an external impact, such as fetching data,updating dom etc.

function UseEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("ram");
  function updateCount() {
    setCount(count + 1);
  }
  function updateData() {
    setData("seeta");
  }
  useEffect(() => {
    console.log("component mounted");
  }, [data]);
  return (
    <div>
      <h1>button clicked {count}</h1>
      <button onClick={updateCount}>click me</button>
      <button onClick={updateData}>update Data</button>
    </div>
  );
}

export default UseEffect;
